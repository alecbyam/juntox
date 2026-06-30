# JuntoX SARL

Plateforme officielle de JuntoX, construite pour devenir un système numérique durable et inspirant.

## Vision
- Transformer l'intelligence humaine en impact économique durable.
- Construire une plateforme modulaire, multi-rôle et évolutive.
- Intégrer l'IA au cœur des services, des dashboards et de l'expérience utilisateur.

## Structure du monorepo
- `frontend/` : Application Next.js 15 en TypeScript, TailwindCSS, Framer Motion.
- `backend/` : API FastAPI en Python pour la logique métier, l'intégration OpenAI et la gestion des services.
- `.github/workflows/` : CI/CD GitHub Actions.
- `infra/` : Configurations de déploiement et Docker.

## Démarrage
### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Objectifs initiaux
- Site institutionnel premium.
- Espaces utilisateur multi-rôles.
- Assistant IA `JuntoX AI` pour l'analyse et les rapports.
- Dashboard extensible et API versionnée.
