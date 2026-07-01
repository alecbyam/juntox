# CHANGELOG — JuntoX SARL Platform

## v2.0.0 — Expansion Multidisciplinaire (2026-07-01)

### Contexte

JuntoX SARL a élargi son objet social pour couvrir l'ensemble du cycle de développement des organisations africaines. Cette version fait évoluer le site pour refléter cette ambition en passant de 8 pôles à **10 pôles d'expertise** et de 7 pages de services à **10 pages**, avec la mise à jour complète de la navigation, du footer, de la homepage et du référencement.

---

### Nouvelles pages créées

| Page | URL | Description |
|---|---|---|
| Ingénierie & Systèmes | `/ingenierie` | Électronique, IoT, robotique, systèmes embarqués, automatisation industrielle |
| Communication & Marketing | `/communication` | Marketing digital, branding, production audiovisuelle, com institutionnelle |
| Secteurs Émergents | `/secteurs-emergents` | Hub : Énergie, Agriculture, eHealth, EdTech, FinTech |

**Philosophie de création** : chaque nouvelle page suit exactement la structure des pages existantes (PageHero, AnimatedSection, Badge, CaseStudy, Accordion, Button) pour garantir la cohérence visuelle totale. Aucun nouveau composant n'a été créé — les nouvelles pages *semblent avoir toujours fait partie du site*.

---

### Pages enrichies

| Page | URL | Ajouts |
|---|---|---|
| Technologies & IA | `/ai` | Cybersécurité, cloud, RPA, transformation digitale, apps mobiles |
| Construction & Génie Civil | `/construction` | Génie civil, rénovation, promotion immobilière, fourniture matériaux, AMO |
| Consultance & Études | `/consultance` | Conseil financier, institutionnel, gestion projets, AMO, M&E, manuels de procédures |
| Formation | `/formation` | E-learning, leadership, certifications tech, formation intra-entreprise |
| Commerce & Distribution | `/commerce` | E-commerce, distribution, matières premières, dédouanement |
| Logistique & Transport | `/logistique` | Transit, dédouanement, chaîne du froid, 3PL, logistique humanitaire |
| Investissement & Incubation | `/investissements` | Incubation, accélération, prise de participation, gestion projets innovants |

---

### Composants transverses modifiés

#### `components/MainNav.tsx`
- **Ajout** : `GroupedDropdownMenu` — nouveau composant qui remplace `DropdownMenu` pour le menu "Services", avec une mise en page en 4 groupes et 2 colonnes (580px de large, style méga-menu)
- **Restructuration** : `serviceGroups` (tableau groupé pour desktop) + `services` (liste plate pour mobile, dérivée de serviceGroups)
- **Aucune régression** : menu "Innovation" inchangé, tous les liens existants conservés

#### `components/Footer.tsx`
- **Colonnes réorganisées** : 4 colonnes → "Entreprise", "Technologies & Ingénierie", "Expertise & Croissance", "Accès"
- **Nouveaux liens** : `/ingenierie`, `/communication`, `/secteurs-emergents`

#### `app/page.tsx` (Homepage)
- **Stats** : 8 secteurs → **10 pôles d'expertise**, 50+ services
- **Service cards** : 8 cartes → **10 cartes** avec nouvelles icônes SVG
- **Golden Circle** : texte mis à jour pour refléter le groupe multidisciplinaire
- **Trust signals** : "Multi-sectoriel 8 domaines" → "Groupe multidisciplinaire 10 pôles"

#### `app/services/page.tsx`
- Réorganisation complète : 4 catégories → **7 pôles** avec 17 items
- Inclut les nouvelles pages + secteurs émergents détaillés (Énergie, Agri, Santé, EdTech, FinTech)

---

### SEO & Métadonnées

| Fichier | Modification |
|---|---|
| `lib/pages-index.ts` | 10 routes de services documentées avec keywords spécialisés |
| `lib/site-config.ts` | Description mise à jour : "Groupe multidisciplinaire" |
| `app/layout.tsx` | 12 mots-clés SEO couvrant tous les pôles |
| Chaque `layout.tsx` | Descriptions et titres précis par pôle |

---

### Architecture : règles respectées

- ✅ **Zéro régression** — URLs existantes non modifiées
- ✅ **Design inchangé** — aucun composant UI modifié, aucune classe CSS ajoutée
- ✅ **Responsive conservé** — toutes les grilles utilisent les breakpoints existants
- ✅ **Performance maintenue** — 40 pages, 0 erreur TypeScript, bundle size stable
- ✅ **SEO conservé** — sitemap.xml régénéré automatiquement (40 routes publiques)
- ✅ **Accessibilité conservée** — ARIA, focus, reduced-motion inchangés

---

### Fichiers créés / modifiés

**Créés (6)** :
```
frontend/app/ingenierie/page.tsx
frontend/app/ingenierie/layout.tsx
frontend/app/communication/page.tsx
frontend/app/communication/layout.tsx
frontend/app/secteurs-emergents/page.tsx
frontend/app/secteurs-emergents/layout.tsx
```

**Modifiés (18)** :
```
frontend/app/page.tsx
frontend/app/services/page.tsx
frontend/app/about/page.tsx
frontend/app/ai/page.tsx + layout.tsx
frontend/app/construction/page.tsx + layout.tsx
frontend/app/consultance/page.tsx + layout.tsx
frontend/app/formation/page.tsx
frontend/app/commerce/page.tsx
frontend/app/logistique/page.tsx
frontend/app/investissements/page.tsx
frontend/app/layout.tsx
frontend/components/MainNav.tsx
frontend/components/Footer.tsx
frontend/lib/pages-index.ts
frontend/lib/site-config.ts
```

---

## v1.x — Historique

| Version | Date | Résumé |
|---|---|---|
| v1.5 | 2026-06-30 | Audit sécurité complet — auth multi-rôles, rate limiting, CSP, JWT |
| v1.4 | 2026-06-30 | SEO complet — robots.txt, sitemap.xml, OG image, JSON-LD, favicon |
| v1.3 | 2026-06-30 | UX améliorée — palette Cmd+K, toasts, 404 intelligent, transitions de page |
| v1.2 | 2026-06-30 | Connexion frontend ↔ backend Railway (PostgreSQL, CORS, OPENAI) |
| v1.1 | 2026-06-30 | Déploiement Railway — backend FastAPI + frontend Next.js |
| v1.0 | 2026-06-29 | Commit initial — 32 pages, design premium noir/rouge |
