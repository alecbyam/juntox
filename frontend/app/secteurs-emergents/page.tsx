'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const sectors = [
  {
    id: 'energie',
    label: 'Énergie',
    badge: 'gold' as const,
    tagline: 'Énergie solaire & Renouvelables',
    description:
      'L\'Afrique subsaharienne possède le potentiel solaire le plus élevé au monde. JuntoX conçoit, installe et opère des solutions d\'énergie renouvelable pour les entreprises, institutions et communautés : centrales solaires, micro-grids hybrides et systèmes de stockage.',
    highlights: [
      { label: 'Installations solaires', detail: 'Systèmes on-grid et off-grid' },
      { label: 'Micro-grids hybrides', detail: 'Solaire + générateur + batterie' },
      { label: 'Stockage d\'énergie', detail: 'Batteries lithium et plomb-gel' },
      { label: 'Energy-as-a-Service', detail: 'Modèles OPEX sans investissement initial' },
    ],
    stat: { value: '60%', label: 'Réduction de facture énergétique moyenne' },
  },
  {
    id: 'agriculture',
    label: 'Agriculture',
    badge: 'primary' as const,
    tagline: 'Agro-industrie & Agriculture intelligente',
    description:
      'L\'Ituri et l\'Est de la RDC disposent d\'un potentiel agricole exceptionnel. JuntoX déploie des solutions d\'agriculture intelligente — capteurs de sol, irrigation connectée, drones agricoles et systèmes de traçabilité — pour moderniser les filières locales et maximiser les rendements.',
    highlights: [
      { label: 'Agriculture de précision', detail: 'Capteurs, IoT et data agronomique' },
      { label: 'Transformation agroalimentaire', detail: 'Unités de transformation et conservation' },
      { label: 'Traçabilité de filière', detail: 'Blockchain et certifications export' },
      { label: 'Financement agricole', detail: 'Accès au crédit pour les exploitants' },
    ],
    stat: { value: '3x', label: 'Rendement moyen avec agriculture de précision' },
  },
  {
    id: 'sante',
    label: 'Santé Numérique',
    badge: 'accent' as const,
    tagline: 'eHealth & Digitalisation hospitalière',
    description:
      'La santé numérique transforme l\'accès aux soins en Afrique. JuntoX développe et déploie des solutions eHealth : dossiers médicaux électroniques, télémédecine, systèmes de gestion hospitalière et outils de collecte de données sanitaires pour renforcer les systèmes de santé.',
    highlights: [
      { label: 'Dossiers médicaux électroniques', detail: 'EMR adaptés aux contextes africains' },
      { label: 'Télémédecine', detail: 'Consultations à distance et diagnostic assisté' },
      { label: 'HIS (Hospital Information System)', detail: 'Gestion intégrée des établissements de santé' },
      { label: 'HMIS & épidémiologie', detail: 'Surveillance et collecte de données de santé' },
    ],
    stat: { value: '5x', label: 'Vitesse de traitement des dossiers patients' },
  },
  {
    id: 'education',
    label: 'Éducation Numérique',
    badge: 'gold' as const,
    tagline: 'EdTech & Plateformes éducatives',
    description:
      'L\'éducation numérique est un levier de développement majeur. JuntoX crée des plateformes d\'apprentissage en ligne adaptées aux contextes africains (faible bande passante, mobile-first) et accompagne les établissements dans leur transformation digitale.',
    highlights: [
      { label: 'LMS (Learning Management System)', detail: 'Plateformes e-learning personnalisées' },
      { label: 'Contenu adaptatif', detail: 'Apprentissage personnalisé par IA' },
      { label: 'Formation hybride', detail: 'Blended learning présentiel + distanciel' },
      { label: 'Certification numérique', detail: 'Badges et diplômes vérifiables blockchain' },
    ],
    stat: { value: '10k+', label: 'Apprenants potentiels sur nos plateformes' },
  },
  {
    id: 'fintech',
    label: 'Finance Numérique',
    badge: 'primary' as const,
    tagline: 'FinTech & Inclusion financière',
    description:
      'La finance numérique est un accélérateur d\'inclusion économique. JuntoX développe et intègre des solutions FinTech : paiements mobiles, gestion de trésorerie, microfinance digitale et outils d\'analyse financière pour les PME africaines.',
    highlights: [
      { label: 'Paiements digitaux', detail: 'Intégration Mobile Money, wallets, USSD' },
      { label: 'Gestion financière SME', detail: 'Outils de comptabilité et trésorerie' },
      { label: 'Microfinance digitale', detail: 'Plateformes de crédit et épargne' },
      { label: 'Analytique financière', detail: 'Dashboards et reporting temps réel' },
    ],
    stat: { value: '70%', label: 'Des Africains sans accès aux services bancaires' },
  },
]

const metrics = [
  { target: 5, suffix: '', label: 'Secteurs d\'avenir couverts' },
  { target: 50, suffix: 'M+', label: 'Personnes ciblées par nos solutions' },
  { target: 3, suffix: '', label: 'Marchés pilotes actifs' },
  { target: 10, suffix: '+', label: 'Partenaires sectoriels' },
]

const faqs = [
  {
    question: 'Ces secteurs sont-ils déjà opérationnels chez JuntoX ou seulement en développement ?',
    answer: 'Certains sont opérationnels (énergie solaire, agriculture IoT, eHealth), d\'autres sont en phase de développement ou de partenariat stratégique. Nous travaillons avec des partenaires spécialisés pour chaque secteur et pouvons structurer des consortiums sur mesure selon votre projet.',
  },
  {
    question: 'Comment JuntoX aborde-t-il des secteurs aussi différents de votre cœur technologique ?',
    answer: 'Notre approche est systémique : chaque secteur émergent est traité comme un problème technologique et managérial. Nous apportons les couches logicielle, IoT, data et conseil, et nous nous associons à des experts du secteur pour les dimensions terrain et réglementaires.',
  },
  {
    question: 'Proposez-vous des solutions packagées ou tout est sur mesure ?',
    answer: 'Les deux. Nous avons des solutions accélérées (kits IoT agriculture, modules eHealth standards) déployables rapidement, et une capacité de sur-mesure complet pour les projets de plus grande envergure. Le choix dépend du délai et du budget.',
  },
  {
    question: 'Travaillez-vous avec des ONG et organisations humanitaires sur ces secteurs ?',
    answer: 'Oui, c\'est l\'un de nos axes de développement prioritaires. Nous avons structuré des offres adaptées aux cycles de projets humanitaires et ONG : devis rapides, documentation conforme aux standards des bailleurs, rapports M&E intégrés.',
  },
]

export default function SecteursEmergentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Secteurs Émergents"
        title="Les marchés d'avenir en Afrique, aujourd'hui"
        description="JuntoX anticipe les secteurs à fort potentiel et déploie des solutions concrètes dans cinq domaines qui vont transformer l'Afrique dans les dix prochaines années : énergie, agriculture, santé, éducation et finance numérique."
        badge="accent"
      >
        <Button href="/contact">Nous rejoindre sur ces marchés</Button>
        <Button href="/incubateur" variant="secondary">Programme d&apos;incubation</Button>
      </PageHero>

      {/* Stats */}
      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="px-6 py-10 text-center">
              <p className="font-serif text-heading-2 font-semibold text-white">
                <AnimatedCounter target={m.target} suffix={m.suffix} />
              </p>
              <p className="mt-2 text-caption text-neutral-500">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors */}
      {sectors.map((sector, i) => (
        <div key={sector.id}>
          <section className="section-padding" id={sector.id}>
            <div className="container-content">
              <AnimatedSection>
                <Badge variant={sector.badge}>{sector.label}</Badge>
                <h2 className="mt-5 font-serif text-heading-1 font-semibold text-white">
                  {sector.tagline}
                </h2>
                <p className="mt-5 max-w-2xl text-body text-neutral-400">
                  {sector.description}
                </p>
              </AnimatedSection>

              <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_auto]">
                <AnimatedSection delay={0.1}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {sector.highlights.map((h) => (
                      <div key={h.label} className="card-base !p-5">
                        <p className="text-sm font-semibold text-white">{h.label}</p>
                        <p className="mt-1 text-xs text-neutral-500">{h.detail}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2} direction="right">
                  <div className="card-featured flex h-full min-w-[200px] flex-col items-center justify-center p-8 text-center">
                    <p className="font-serif text-display font-semibold text-white">
                      {sector.stat.value}
                    </p>
                    <p className="mt-3 text-sm text-neutral-400">{sector.stat.label}</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
          {i < sectors.length - 1 && <div className="divider" />}
        </div>
      ))}

      <div className="divider" />

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection className="max-w-2xl">
            <Badge>Questions fréquentes</Badge>
            <h2 className="mt-6 font-serif text-heading-1 font-semibold text-white">
              Ce que vous vous demandez
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />
        </div>
        <AnimatedSection className="container-content relative text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Votre secteur n&apos;est pas listé ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Nous étudions chaque opportunité de marché avec sérieux. Partagez votre vision et construisons ensemble.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">Discuter d&apos;une opportunité</Button>
            <Button href="/investissements" variant="secondary" size="lg">Investir avec nous</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
