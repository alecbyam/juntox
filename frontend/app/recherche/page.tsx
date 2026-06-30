'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { CaseStudy } from '../../components/ui/CaseStudy'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const capabilities = [
  { title: 'Veille technologique', description: 'Monitoring continu des tendances, brevets et innovations mondiales pertinentes pour l\'Afrique.' },
  { title: 'Études de marché', description: 'Analyses quantitatives et qualitatives pour comprendre les dynamiques de marché et identifier les niches.' },
  { title: 'Prototypage rapide', description: 'Développement de preuves de concept pour valider les hypothèses avant l\'investissement.' },
  { title: 'Publications', description: 'Production de rapports de recherche, white papers et études sectorielles.' },
  { title: 'R&D appliquée', description: 'Recherche orientée vers des solutions concrètes et commercialisables, pas académiques.' },
  { title: 'Innovation ouverte', description: 'Collaboration avec universités, laboratoires et startups pour accélérer l\'innovation.' },
]

const researchAreas = [
  { name: 'IA appliquée à l\'agriculture', stage: 'Prototype' },
  { name: 'Infrastructures intelligentes', stage: 'Étude' },
  { name: 'Fintech inclusive', stage: 'Publication' },
  { name: 'Logistique optimisée par IA', stage: 'Prototype' },
]

const process = [
  { step: 'Identifier', description: 'Cartographie des problèmes non résolus et des opportunités inexploitées.' },
  { step: 'Analyser', description: 'Études approfondies, benchmarks et modélisation des scénarios.' },
  { step: 'Prototyper', description: 'Construction de preuves de concept fonctionnelles et testables.' },
  { step: 'Publier', description: 'Documentation, transfert de connaissances et diffusion publique.' },
]

const faqs = [
  {
    question: 'Vos recherches sont-elles accessibles publiquement ?',
    answer: 'Une partie de nos publications est disponible sur notre blog. Les études commanditées par des clients restent confidentielles sauf accord contraire.',
  },
  {
    question: 'Collaborez-vous avec des universités ?',
    answer: 'Oui, nous avons des partenariats actifs avec plusieurs institutions académiques en RDC et à l\'international pour la co-recherche et l\'encadrement de chercheurs.',
  },
  {
    question: 'Comment un prototype devient-il un produit ?',
    answer: 'Les prototypes validés peuvent être transférés à notre incubateur pour développement commercial, ou faire l\'objet d\'un investissement direct via notre pôle Investissements.',
  },
  {
    question: 'Puis-je proposer un sujet de recherche ?',
    answer: 'Oui, nous évaluons en continu des propositions de recherche externes, en particulier celles alignées avec nos secteurs prioritaires.',
  },
]

export default function RecherchePage() {
  return (
    <>
      <PageHero
        eyebrow="Recherche & Innovation"
        title="Cartographier les opportunités, inventer les modèles"
        description="Notre département de recherche combine veille technologique, analyse de marché et prototypage rapide pour identifier et valider les prochaines grandes opportunités."
      >
        <Button href="/contact">Proposer un sujet</Button>
        <Button href="/blog" variant="secondary">Lire nos publications</Button>
      </PageHero>

      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 4, suffix: '', label: 'Axes de recherche actifs' },
            { target: 12, suffix: '+', label: 'Publications produites' },
            { target: 3, suffix: '', label: 'Partenariats académiques' },
            { target: 2, suffix: '', label: 'Prototypes en cours' },
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

      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="accent">Capacités</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              De l&apos;id&eacute;e &agrave; la preuve de concept
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.08}>
                <div className="card-base h-full">
                  <h3 className="text-base font-semibold text-white">{cap.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400">{cap.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="primary">Axes actifs</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Ce sur quoi nous travaillons
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area, i) => (
              <AnimatedSection key={area.name} delay={i * 0.08}>
                <div className="card-base h-full">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                    area.stage === 'Prototype'
                      ? 'bg-accent/10 text-accent-light'
                      : area.stage === 'Publication'
                      ? 'bg-green-500/10 text-green-400'
                      : 'bg-white/[0.04] text-neutral-500'
                  }`}>
                    {area.stage}
                  </span>
                  <h4 className="mt-3 text-sm font-semibold text-white">{area.name}</h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Méthodologie</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Notre approche en 4 étapes
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

      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Étude de cas</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Une recherche en chiffres
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <CaseStudy
              tag="Recherche appliquée — AgriTech"
              title="Prototype de traçabilité agricole par IA pour petits producteurs"
              description="En partenariat avec une université locale, nous avons développé un prototype utilisant la vision par ordinateur pour évaluer la qualité des récoltes. Le projet est passé de la recherche à l'incubation en 4 mois."
              metrics={[
                { value: '4 mois', label: 'Recherche à prototype' },
                { value: '85%', label: 'Précision du modèle' },
                { value: '1', label: 'Transfert vers incubateur' },
              ]}
            />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection className="max-w-2xl">
            <Badge>Questions fréquentes</Badge>
            <h2 className="mt-6 font-serif text-heading-1 font-semibold text-white">
              Ce que l&apos;on nous demande souvent
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
            Un sujet de recherche vous int&eacute;resse ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Collaborons pour explorer les prochaines grandes opportunit&eacute;s ensemble.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Proposer un sujet</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
