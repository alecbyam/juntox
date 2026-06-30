# ADR 0001: Architecture de la plateforme officielle JuntoX SARL

## Statut
Proposé

## Contexte
JuntoX vise à devenir une plateforme technologique africaine puis mondiale, fondée sur des services numériques, de l'IA, de la recherche, de l'investissement, de la construction, de la logistique et de la formation. Le site doit dépasser le rôle de vitrine et incarner un système numérique modulable, durable, évolutif et inspirant.

## Objectifs
- Donner l'impression d'une entreprise qui existera dans 100 ans.
- Inspirer confiance, intelligence, ambition, innovation et excellence.
- Construire une plateforme modulaire pouvant supporter des milliers d'utilisateurs.
- Placer l'IA au cœur du produit.
- Fournir une expérience élégante, claire et remarquablement simple.
- Préparer des espaces distincts pour administrateurs, clients, employés, investisseurs, consultants et partenaires.
- Permettre l'évolution vers CRM, ERP, document management, dashboard, API et automatisation.

## Contrainte clé
- Stack demandée : Next.js 15, TypeScript, TailwindCSS, Framer Motion, Supabase, PostgreSQL, FastAPI, Python, OpenAI, Docker, GitHub Actions, Vercel.
- Site pensé comme infrastructure numérique plutôt que simple page marketing.
- Design inspiré de Harvard, Apple, Stripe, SpaceX, Microsoft, Notion, Vercel.
- Identité visuelle: noir profond, blanc, rouge institutionnel, gris élégant, accent bleu technologique.
- Typographie: Playfair Display + Inter.

## Problèmes à résoudre
1. Offrir un site institutionnel qui sert aussi de plateforme business.
2. Créer des espaces multi-rôles et des services modulaires.
3. Intégrer l'IA pour l'analyse de projets, business plans, études financières, estimation de chantiers, réponses clients et rapports.
4. Concevoir une architecture durable, évolutive, maintenable.
5. Respecter l'expérience simple et haut de gamme.

## Décision technique
### Architecture globale
Adopter une architecture hybride frontend/backend monorepo:

- `frontend/` : application Next.js 15 + TypeScript + TailwindCSS + Framer Motion.
- `backend/` : API FastAPI en Python, dédiée aux services métier, calculs, workflows IA et intégrations.
- `infra/` : Docker, scripts de déploiement, configuration GitHub Actions.
- `shared/` : types partagés, schémas OpenAPI, clients API.

Cette séparation permet:
- une interface utilisateur premium et performante,
- une couche métier serveur indépendante, testable et scalable,
- des déploiements ciblés (Vercel pour frontend, service API dédié pour FastAPI).

### Frontend
- Next.js 15 App Router pour modularité et SSR/ISR.
- TypeScript strict.
- TailwindCSS pour design rapide, cohérent et responsive.
- Framer Motion pour transitions fluides, animations utiles et expérience sophistiquée.
- Pages clés: Accueil, À propos, Vision, Services, Secteurs, Recherche & Innovation, Construction, IA, Consultance, Études, Logistique, Commerce, Formation, Investissements, Incubateur, Laboratoire IA, Portfolio, Blog, Carrières, Partenaires, Investisseurs, Contact.
- Espaces dédiés via routes protégées: /dashboard/admin, /dashboard/client, /dashboard/employe, /dashboard/investisseur, /dashboard/consultant, /dashboard/partenaire.

### Backend
- FastAPI pour API RESTful moderne, documentation OpenAPI native et rapidité de développement Python.
- PostgreSQL via Supabase pour base de données relationnelle et gestion d'authentification.
- Supabase Auth pour l'authentification multirôle, JWT et SSO potentiels.
- Webhooks / functions pour automatisations (notifications, onboarding, synchronisation CRM).
- Intégration OpenAI via service backend pour:
  - analyse de projet,
  - génération de business plans,
  - études financières,
  - estimation de chantiers,
  - assistant client/investisseur,
  - génération de rapports.

### Données et domaines métier
- `users` + `roles` (administrateur, client, employé, investisseur, consultant, partenaire).
- `projects`, `studies`, `investments`, `construction_cases`, `logistics_operations`, `training_programs`, `research_publications`.
- `dashboards` avec widgets configurables.
- `documents` et `assets` pour gestion documentaire.
- `crm_contacts`, `deals`, `tasks`, `notes` pour extension CRM.
- `audit_logs` et `activity` pour conformité et confiance.

### IA
Le système IA ne sera pas un gadget, mais un assistant intégré:
- `JuntoX AI` comme service transversal.
- En backend, couche `AIService` orchestrant prompts, pipelines et mémoires.
- Capacité à analyser les données métiers et à proposer des actions.
- Interface conversationnelle accessible depuis tous les dashboards.
- Moteur évolutif capable de supporter de futurs modèles locaux ou hybrides.

### Design & UX
- Minimalisme fonctionnel avec hiérarchie typographique forte.
- Mise en avant du WHY sur la page d'accueil.
- Pages narratives qui racontent l'histoire JuntoX, chaque section construisant confiance.
- CTA basés sur l'engagement: rejoindre l'aventure, entrer en contact, proposer un projet.
- Composants modulaires réutilisables: hero, stats, cards, témoignages, timeline, pipeline, tables.
- Effets subtils (survol, in-view animation, micro-interactions) pour luxe discret.

### Déploiement
- Frontend déployé sur Vercel.
- Backend déployé via Docker sur un service cloud compatible (par exemple Render, Fly.io, Railway, ou Supabase Edge Functions si adaptée).
- GitHub Actions pour CI/CD:
  - tests frontend,
  - linting,
  - build Next.js,
  - tests backend,
  - build Docker image,
  - déploiement de l'API et du frontend.

### Sécurité et scalabilité
- Authentification par Supabase Auth.
- RBAC pour espaces utilisateurs et API.
- Validation stricte des données côté backend.
- Monitoring et logging via outils cloud.
- Infrastructure Docker pour portabilité.
- API versionnée.

## Options considérées
1. Tout faire uniquement avec Next.js et Supabase.
   - Avantages: simplicité de déploiement.
   - Inconvénients: moins de séparation métier, moins d’indépendance pour services Python/IA.

2. Monorepo Next.js + FastAPI.
   - Avantages: flexibilité, découplage frontend/backend, meilleur support Python pour IA.
   - Inconvénients: plus de complexité d’infra initiale.

3. Utiliser uniquement Supabase Edge Functions sans backend FastAPI.
   - Avantages: vitesse de mise en place.
   - Inconvénients: limitations pour la logique métier complexe et services IA avancés.

## Décision
Choisir une architecture monorepo avec Frontend Next.js 15 + Backend FastAPI Python + Supabase PostgreSQL/Auth. Cette combinaison respecte le stack demandé, permet une plateforme évolutive, et crée un vrai système numérique avec une séparation claire des responsabilités.

## Prochaines étapes
1. Créer l’architecture du monorepo.
2. Initialiser `frontend/` avec Next.js, TypeScript, Tailwind, Framer Motion.
3. Initialiser `backend/` avec FastAPI, configuration Supabase et OpenAI.
4. Concevoir les modèles de données et les schémas initiaux PostgreSQL.
5. Créer le premier prototype du site institutionnel et du dashboard administrateur.
6. Développer le coeur `JuntoX AI`.

## Justification métier
- WHY: la plateforme supprime la frontière entre connaissance et infrastructure.
- HOW: en combinant IA, logiciels, construction, logistique, conseil, investissement, recherche et formation.
- WHAT: en livrant plateformes IA, systèmes de gestion, services de construction, logistique, investissement et recherche.
- UX et marque: l’objectif est que le visiteur se dise « je veux faire partie de cette aventure ».
- Échelle: architecture modulaire pour des milliers d’utilisateurs, des API, des dashboards et des espaces multi-rôles.

---

Ce document servira de référence pour la construction progressive du projet, en gardant le cap sur l'ambition à long terme et la qualité technique.
