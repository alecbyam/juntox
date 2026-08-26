"""Notification email best-effort — utilise smtplib (stdlib, pas de dépendance
supplémentaire) contre la boîte pro Hostinger (contact@juntoxrdc.com).

Design volontairement défensif : un échec d'envoi (SMTP_HOST absent en dev,
identifiants pas encore configurés, panne réseau) ne doit JAMAIS faire échouer
la fonctionnalité principale (l'enregistrement du message en base) — même
philosophie que côté Livroto (src/lib/agents.functions.ts, saveDraft()).
"""
import logging
import os
import smtplib
import socket
from contextlib import contextmanager
from email.message import EmailMessage

logger = logging.getLogger(__name__)


@contextmanager
def _force_ipv4():
    """Railway ne route pas la sortie IPv6 par défaut (opt-in séparé) — or
    smtp.hostinger.com publie un enregistrement AAAA, et getaddrinfo() renvoie
    l'IPv6 en premier, ce qui donnait "OSError: Network is unreachable" à
    chaque envoi. On restreint temporairement la résolution DNS à l'IPv4 le
    temps de la connexion SMTP, sans toucher le hostname (le certificat TLS
    reste vérifié contre smtp.hostinger.com normalement)."""
    original = socket.getaddrinfo

    def ipv4_only(host, port, family=0, type=0, proto=0, flags=0):
        return original(host, port, socket.AF_INET, type, proto, flags)

    socket.getaddrinfo = ipv4_only
    try:
        yield
    finally:
        socket.getaddrinfo = original


def send_contact_notification(name: str, email: str, subject: str, message: str) -> bool:
    """Envoie une notification à CONTACT_NOTIFY_EMAIL (ou SMTP_USER par défaut)
    quand un visiteur soumet le formulaire de contact — jusqu'ici invisible
    tant que personne n'allait consulter la table contact_messages à la main.
    Reply-To pointe vers le visiteur : une réponse directe depuis la boîte
    mail suffit, pas besoin de retourner sur le site.
    """
    host = os.getenv('SMTP_HOST', '').strip()
    user = os.getenv('SMTP_USER', '').strip()
    password = os.getenv('SMTP_PASS', '').strip()
    if not host or not user or not password:
        logger.info('[email_notify] SMTP non configuré — notification ignorée (message bien enregistré en base)')
        return False

    port = int(os.getenv('SMTP_PORT', '465'))
    to_addr = os.getenv('CONTACT_NOTIFY_EMAIL', '').strip() or user

    msg = EmailMessage()
    msg['Subject'] = f'📬 Nouveau message contact — {subject}'
    msg['From'] = f'JuntoX Site <{user}>'
    msg['To'] = to_addr
    msg['Reply-To'] = email
    msg.set_content(
        f'Nouveau message reçu via le formulaire de contact juntoxrdc.com\n\n'
        f'De : {name} <{email}>\n'
        f'Sujet : {subject}\n\n'
        f'Message :\n{message}\n\n'
        f'---\nRépondre directement à cet email revient à répondre à {email}.'
    )

    try:
        with _force_ipv4():
            if port == 465:
                with smtplib.SMTP_SSL(host, port, timeout=10) as server:
                    server.login(user, password)
                    server.send_message(msg)
            else:
                with smtplib.SMTP(host, port, timeout=10) as server:
                    server.starttls()
                    server.login(user, password)
                    server.send_message(msg)
        return True
    except Exception:
        logger.exception('[email_notify] échec envoi notification contact (message bien enregistré en base)')
        return False
