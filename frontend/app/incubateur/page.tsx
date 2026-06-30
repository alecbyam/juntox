'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { CaseStudy } from '../../components/ui/CaseStudy'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const program = [
  { title: 'Sélection', description: 'Candidature ouverte aux startups technologiques africaines avec un produit ou prototype fonctionnel.' },
  { title: 'Mentorat', description: 'Accompagnement personnalisé par des experts en stratégie, technologie, finance et opérations.' },
  { title: 'Ressources', description: 'Accès à nos outils, infrastructures, IA et réseau de partenaires.' },
  { title: 'Capital', description: 'Possibilité d\'investissement direct par JuntoX et introduction à notre réseau de co-investisseurs.' },
  { title: 'Formation', description: 'Programmes intensifs en leadership, product management et scaling.' },
  { title: 'Réseau', description: 'Connexion avec des entreprises, investisseurs et institutions à l\'échelle mondiale.' },
]

const criteria = [
  'Équipe fondatrice avec expertise technique ou sectorielle',
  'Produit ou prototype fonctionnel (pas juste une idée)',
  'Marché adressable significatif en Afrique',
  'Potentiel de scalabilité internationale',
  'Alignement avec les secteurs JuntoX : IA, logistique, construction, commerce, formation',
]

const timeline = [
  { phase: 'Semaines 1–2', title: 'Onboarding', description: 'Diagnostic complet, définition des objectifs et constitution de l\'équipe de mentors.' },
  { phase: 'Semaines 3–10', title: 'Accélération', description: 'Sprints produit, ateliers stratégie, accès aux outils IA et au réseau JuntoX.' },
  { phase: 'Semaines 11–12', title: 'Demo Day', description: 'Présentation devant investisseurs et partenaires pour lever les premiers financements.' },
]

const faqs = [
  {
    question: 'Le programme prend-il une participation au capital ?',
    answer: 'JuntoX peut proposer un investissement en échange d\'une participation minoritaire, mais ce n\'est jamais une condition d\'entrée dans le programme — l\'accompagnement reste accessible sans dilution obligatoire.',
  },
  {
    question: 'Le programme est-il payant ?',
    answer: 'Non, l\'accompagnement est gratuit pour les startups sélectionnées. Notre modèle repose sur la création de valeur partagée à long terme, pas sur des frais d\'entrée.',
  },
  {
    question: 'Dois-je être basé à Kinshasa pour participer ?',
    answer: 'La majorité du programme peut se suivre à distance, mais une présence physique est recommandée pour le Demo Day et certains ateliers clés.',
  },
  {
    question: 'Que se passe-t-il après le Demo Day ?',
    answer: 'Les startups les plus prometteuses peuvent intégrer notre pipeline d\'investissement direct ou être introduites à notre réseau de co-investisseurs internationaux.',
  },
]

export default function IncubateurPage() {
  return (
    <>
      <PageHero
        eyebrow="Incubateur"
        title="Accélérer les startups qui transformeront l'Afrique"
        description="L'incubateur JuntoX accompagne les startups technologiques africaines les plus prometteuses avec du mentorat, des ressources, du capital et un réseau mondial."
        badge="primary"
      >
        <Button href="/contact">Candidater</Button>
        <Button href="/investissements" variant="secondary">Investir dans l&apos;incubateur</Button>
      </PageHero>

      {/* Stats */}
      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 12, suffix: ' sem.', label: 'Durée du programme' },
            { target: 6, suffix: '', label: 'Startups accompagnées' },
            { target: 0, suffix: '€', label: 'Frais d\'entrée' },
            { target: 3, suffix: '', label: 'Financements obtenus' },
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
            <Badge variant="primary">Programme</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Ce que nous offrons
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {program.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="card-base h-full">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="gold">Déroulé</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              12 semaines, trois phases
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {timeline.map((phase, i) => (
              <AnimatedSection key={phase.phase} delay={i * 0.1}>
                <div className="card-featured h-full">
                  <span className="text-sm font-medium text-primary-light">{phase.phase}</span>
                  <h3 className="mt-3 font-serif text-heading-3 font-semibold text-white">{phase.title}</h3>
                  <p className="mt-4 text-sm text-neutral-400">{phase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <AnimatedSection>
              <Badge variant="accent">Critères de sélection</Badge>
              <h2 className="mt-6 font-serif text-heading-1 font-semibold text-white">
                Qui recherchons-nous ?
              </h2>
              <p className="mt-5 text-body text-neutral-400">
                Nous sélectionnons des startups avec une ambition claire et un potentiel d&apos;impact mesurable.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="space-y-3">
                {criteria.map((criterion) => (
                  <div key={criterion} className="card-base !p-5 flex gap-4 items-start">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <p className="text-sm text-neutral-300">{criterion}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
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
              Une cohorte en chiffres
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <CaseStudy
              tag="Incubation — AgriTech"
              title="D'un prototype de recherche à une levée de fonds en 5 mois"
              description="Issue de notre laboratoire de recherche, une startup de traçabilité agricole a intégré l'incubateur, affiné son modèle d'affaires en 12 semaines, puis levé un tour de table de $400K via notre réseau de co-investisseurs."
              metrics={[
                { value: '12 sem.', label: 'Durée du programme' },
                { value: '$400K', label: 'Capital levé' },
                { value: '5 mois', label: 'Recherche à investissement' },
              ]}
            />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection className="max-w-2xl">
            <Badge>Questions fréquentes</Badge>
            <h2 className="mt-6 font-serif text-heading-1 font-semibold text-white">
              Ce que nos candidats demandent
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
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[120px]" />
        </div>
        <AnimatedSection className="container-content relative text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Prêt à accélérer votre startup ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Les candidatures sont ouvertes en continu. Présentez votre projet et rejoignez l&apos;écosystème JuntoX.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Soumettre votre candidature</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
