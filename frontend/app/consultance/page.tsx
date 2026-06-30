'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { CaseStudy } from '../../components/ui/CaseStudy'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const offerings = [
  {
    title: 'Études stratégiques',
    description: 'Analyse de marché, positionnement concurrentiel et stratégie d\'entrée pour les entreprises qui veulent s\'implanter ou croître en Afrique centrale.',
    deliverables: ['Cartographie marché', 'Analyse concurrentielle', 'Recommandations stratégiques'],
  },
  {
    title: 'Due diligence',
    description: 'Évaluation approfondie d\'entreprises, d\'actifs et de projets avant investissement, acquisition ou partenariat.',
    deliverables: ['Audit financier', 'Audit opérationnel', 'Rapport de risques'],
  },
  {
    title: 'Transformation digitale',
    description: 'Accompagnement des organisations dans la modernisation de leurs processus, systèmes et culture numérique.',
    deliverables: ['Diagnostic digital', 'Feuille de route', 'Plan de mise en œuvre'],
  },
  {
    title: 'Analyses financières',
    description: 'Modélisation financière, projections de trésorerie et évaluation de la rentabilité de projets complexes.',
    deliverables: ['Modèle financier', 'Projections 3-5 ans', 'Analyse de sensibilité'],
  },
  {
    title: 'Stratégie d\'entreprise',
    description: 'Définition de vision, mission et feuille de route à 3-5 ans pour les organisations en croissance.',
    deliverables: ['Atelier de vision', 'Plan stratégique', 'OKRs annuels'],
  },
  {
    title: 'Études sectorielles',
    description: 'Rapports approfondis sur des secteurs spécifiques — agro-industrie, fintech, énergie, infrastructures.',
    deliverables: ['Rapport sectoriel', 'Benchmarks', 'Recommandations'],
  },
]

const engagementModels = [
  {
    name: 'Mission flash',
    duration: '1 à 2 semaines',
    description: 'Diagnostic rapide et recommandations actionnables pour une décision urgente.',
    fit: 'Idéal pour valider une hypothèse ou trancher rapidement.',
  },
  {
    name: 'Mission approfondie',
    duration: '4 à 8 semaines',
    description: 'Étude complète avec collecte de données terrain, analyse rigoureuse et plan d\'action détaillé.',
    fit: 'Pour les décisions stratégiques majeures.',
  },
  {
    name: 'Accompagnement continu',
    duration: '3 à 12 mois',
    description: 'Présence régulière aux côtés de la direction pour piloter une transformation ou une croissance.',
    fit: 'Pour les organisations en pleine transformation.',
  },
]

const process = [
  { step: 'Cadrage', description: 'Réunion de cadrage pour définir objectifs, périmètre et livrables attendus.' },
  { step: 'Collecte', description: 'Entretiens, données terrain, benchmarks et recherche documentaire.' },
  { step: 'Analyse', description: 'Modélisation, synthèse et identification des insights clés.' },
  { step: 'Restitution', description: 'Présentation des conclusions et plan d\'action priorisé.' },
]

const faqs = [
  {
    question: 'Quel est le délai moyen pour une étude de marché ?',
    answer: 'Entre 3 et 6 semaines selon la complexité du secteur et la disponibilité des données. Une mission flash peut être livrée en 1 à 2 semaines pour les besoins urgents.',
  },
  {
    question: 'Travaillez-vous avec des entreprises hors RDC ?',
    answer: 'Oui. Nous accompagnons des clients à travers l\'Afrique centrale et de l\'Ouest, ainsi que des entreprises internationales souhaitant s\'implanter sur le continent.',
  },
  {
    question: 'Comment garantissez-vous la confidentialité ?',
    answer: 'Chaque mission est encadrée par un accord de confidentialité (NDA). Les données client ne sont jamais partagées avec des tiers ni réutilisées sans autorisation explicite.',
  },
  {
    question: 'Proposez-vous un accompagnement après la remise du rapport ?',
    answer: 'Oui, nous proposons un suivi de mise en œuvre optionnel pour s\'assurer que les recommandations se traduisent en résultats concrets.',
  },
]

export default function ConsultancePage() {
  return (
    <>
      <PageHero
        eyebrow="Consultance & Études"
        title="Des analyses qui transforment l'incertitude en décision"
        description="Nos consultants combinent rigueur analytique, expertise sectorielle et connaissance fine du terrain africain pour accompagner les décisions les plus critiques de votre organisation."
      >
        <Button href="/contact">Démarrer une mission</Button>
        <Button href="#offres" variant="secondary">Voir nos offres</Button>
      </PageHero>

      {/* Stats bar */}
      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 40, suffix: '+', label: 'Études livrées' },
            { target: 12, suffix: '', label: 'Secteurs couverts' },
            { target: 6, suffix: '', label: 'Pays d\'intervention' },
            { target: 95, suffix: '%', label: 'Clients satisfaits' },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-10 text-center">
              <p className="font-serif text-heading-2 font-semibold text-white">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-caption text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offerings */}
      <section id="offres" className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="primary">Nos offres</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Six domaines d&apos;expertise
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {offerings.map((offer, i) => (
              <AnimatedSection key={offer.title} delay={i * 0.08}>
                <div className="card-base h-full">
                  <h3 className="text-lg font-semibold text-white">{offer.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400">{offer.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {offer.deliverables.map((d) => (
                      <span key={d} className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-neutral-500">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Process */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="accent">Méthodologie</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Comment nous travaillons
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="card-base h-full">
                  <span className="text-heading-2 font-serif font-semibold text-white/[0.06]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="mt-3 text-sm font-semibold text-white">{step.step}</h4>
                  <p className="mt-2 text-sm text-neutral-500">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Case study */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Étude de cas</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Un exemple de mission
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <CaseStudy
              tag="Étude de marché — Fintech"
              title="Évaluation du potentiel fintech en RDC pour un investisseur international"
              description="Un fonds d'investissement panafricain nous a mandatés pour évaluer l'opportunité d'investir dans le secteur fintech congolais. En 5 semaines, nous avons cartographié l'écosystème, analysé la réglementation et identifié trois cibles d'investissement prioritaires."
              metrics={[
                { value: '5 sem.', label: 'Durée de la mission' },
                { value: '3', label: 'Cibles identifiées' },
                { value: '$1M+', label: 'Décision d\'investissement éclairée' },
              ]}
            />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      {/* Engagement models */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="gold">Formats de mission</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Un format adapté à votre besoin
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {engagementModels.map((model, i) => (
              <AnimatedSection key={model.name} delay={i * 0.1}>
                <div className="card-featured h-full">
                  <h3 className="font-serif text-heading-3 font-semibold text-white">{model.name}</h3>
                  <p className="mt-2 text-sm font-medium text-primary-light">{model.duration}</p>
                  <p className="mt-4 text-sm text-neutral-400">{model.description}</p>
                  <p className="mt-4 text-xs text-neutral-600">{model.fit}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection className="max-w-2xl">
            <Badge>Questions fréquentes</Badge>
            <h2 className="mt-6 font-serif text-heading-1 font-semibold text-white">
              Ce que nos clients demandent
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding relative overflow-hidden">
        <AnimatedSection className="container-content relative text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Besoin d&apos;une analyse stratégique ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Parlez-nous de votre enjeu et recevez une première évaluation sous 48 heures.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Nous contacter</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
