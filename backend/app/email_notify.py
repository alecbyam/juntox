"""Notification email best-effort pour le formulaire de contact, envoyée via
l'API REST Hostinger Email (https://api.mail.hostinger.com) plutôt que du
SMTP brut.

Historique : la première version utilisait smtplib (stdlib) contre
smtp.hostinger.com:465/587, mais Railway bloque le SMTP sortant sur les deux
ports (politique anti-spam standard des hébergeurs cloud) — chaque tentative
échouait avec "Network is unreachable" puis "timed out" une fois l'IPv4 forcée.
L'API REST passe par HTTPS (443), jamais bloqué.

Design volontairement défensif : un échec d'envoi (token absent en dev, panne
réseau, quota dépassé) ne doit JAMAIS faire échouer la fonctionnalité
principale (l'enregistrement du message en base) — même philosophie que côté
Livroto (src/lib/agents.functions.ts, saveDraft()).
"""
import logging
import os

import httpx

logger = logging.getLogger(__name__)

API_BASE = "https://api.mail.hostinger.com"


def send_contact_notification(name: str, email: str, subject: str, message: str) -> bool:
    """Envoie une notification à CONTACT_NOTIFY_EMAIL (ou SMTP_USER par défaut)
    quand un visiteur soumet le formulaire de contact — jusqu'ici invisible
    tant que personne n'allait consulter la table contact_messages à la main.
    Reply-To pointe vers le visiteur : une réponse directe depuis la boîte
    mail suffit, pas besoin de retourner sur le site.
    """
    token = os.getenv('HOSTINGER_API_TOKEN', '').strip()
    mailbox_id = os.getenv('HOSTINGER_MAILBOX_ID', '').strip()
    if not token or not mailbox_id:
        logger.info('[email_notify] Hostinger API non configurée — notification ignorée (message bien enregistré en base)')
        return False

    from_addr = os.getenv('SMTP_USER', '').strip() or 'contact@juntoxrdc.com'
    to_addr = os.getenv('CONTACT_NOTIFY_EMAIL', '').strip() or from_addr

    body = {
        "to": [to_addr],
        "displayName": "JuntoX Site",
        "subject": f"📬 Nouveau message contact — {subject}",
        "text": (
            f"Nouveau message reçu via le formulaire de contact juntoxrdc.com\n\n"
            f"De : {name} <{email}>\n"
            f"Sujet : {subject}\n\n"
            f"Message :\n{message}\n\n"
            f"---\nRépondre directement à cet email revient à répondre à {email}."
        ),
    }
    # L'API ne prend pas de Reply-To dédié dans ce payload minimal ; on l'indique
    # dans le corps du message (voir note ci-dessus) plutôt que de complexifier.

    try:
        resp = httpx.post(
            f"{API_BASE}/api/v1/mailboxes/{mailbox_id}/send",
            json=body,
            headers={"Authorization": f"Bearer {token}"},
            timeout=10,
        )
        resp.raise_for_status()
        return True
    except Exception:
        logger.exception('[email_notify] échec envoi notification contact (message bien enregistré en base)')
        return False
