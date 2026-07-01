'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { CaseStudy } from '../../components/ui/CaseStudy'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const capabilities = [
  { title: 'Capital-risque (Venture)', description: 'Investissement en equity dans des startups technologiques et innovantes africaines à fort potentiel de croissance et d\'impact.' },
  { title: 'Incubation de startups', description: 'Programme d\'incubation intensif 12 semaines : mentorat, ressources, réseau et accès au capital pour les porteurs de projets à potentiel.' },
  { title: 'Accélération', description: 'Programme d\'accélération pour startups post-MVP : scale produit, expansion marché et préparation aux levées de fonds.' },
  { title: 'Gestion de projets innovants', description: 'Pilotage de projets à fort contenu technologique ou d\'innovation pour le compte de partenaires institutionnels ou privés.' },
  { title: 'Prise de participation', description: 'Acquisition de participations minoritaires ou majoritaires dans des PME à fort potentiel, avec accompagnement stratégique actif.' },
  { title: 'Structuration financière', description: 'Montage de financements, structuration de deals complexes, levées de fonds Serie A/B et syndication avec co-investisseurs.' },
  { title: 'Due diligence', description: 'Évaluation rigoureuse — financière, technique, juridique et ESG — de chaque opportunité avant tout engagement.' },
  { title: 'Impact investing', description: 'Investissements à impact : retour financier mesurable combiné à des indicateurs sociaux et environnementaux (ODD alignés).' },
]

const sectors = [
  { name: 'Technologies & IA', allocation: '30%' },
  { name: 'Infrastructures', allocation: '20%' },
  { name: 'Agro-industrie', allocation: '20%' },
  { name: 'FinTech & EdTech', allocation: '15%' },
  { name: 'Énergie & Santé', allocation: '15%' },
]

const process = [
  { step: 'Sourcer', description: 'Identification des meilleurs projets via notre réseau et notre incubateur.' },
  { step: 'Évaluer', description: 'Due diligence technique, financière et stratégique approfondie.' },
  { step: 'Investir', description: 'Structuration du deal et déploiement du capital sous 4 à 8 semaines.' },
  { step: 'Accompagner', description: 'Support continu pour maximiser la croissance et la sortie.' },
]

const faqs = [
  {
    question: 'Quel est le ticket d\'investissement moyen ?',
    answer: 'Nos tickets vont de $25 000 pour l\'amorçage à $500 000 pour des séries A, selon le stade de maturité et le secteur du projet.',
  },
  {
    question: 'Quels secteurs privilégiez-vous ?',
    answer: 'Nous concentrons 80% de notre allocation sur quatre secteurs : IA & logiciels, infrastructures, agro-industrie et fintech — domaines où JuntoX apporte une valeur ajoutée opérationnelle réelle.',
  },
  {
    question: 'Comment accédez-vous aux meilleures opportunités ?',
    answer: 'Notre incubateur et notre activité de consultance nous donnent une visibilité unique sur les entreprises les plus prometteuses avant qu\'elles ne soient visibles du marché.',
  },
  {
    question: 'Proposez-vous du co-investissement avec des fonds étrangers ?',
    answer: 'Oui, nous structurons régulièrement des tours avec des fonds panafricains et internationaux qui recherchent un partenaire local de confiance.',
  },
]

export default function InvestissementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investissements"
        title="Mobiliser le capital pour l'innovation africaine"
        description="Nous identifions, structurons et accompagnons des investissements dans des entreprises et projets à fort potentiel de croissance et d'impact durable en Afrique."
      >
        <Button href="/contact">Soumettre un projet</Button>
        <Button href="/investisseurs" variant="secondary">Espace investisseurs</Button>
      </PageHero>

      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 18, suffix: 'M$', label: 'Capital mobilisé' },
            { target: 14, suffix: '', label: 'Entreprises financées' },
            { target: 4, suffix: '', label: 'Secteurs prioritaires' },
            { target: 8, suffix: ' sem.', label: 'Délai moyen de deal' },
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
            <Badge variant="primary">Capacités</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Du sourcing &agrave; l&apos;accompagnement
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
            <Badge variant="gold">Allocation sectorielle</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              O&ugrave; nous investissons
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10 max-w-2xl space-y-4">
            {sectors.map((sector) => (
              <div key={sector.name}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-neutral-300">{sector.name}</span>
                  <span className="text-neutral-500">{sector.allocation}</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/[0.04]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                    style={{ width: sector.allocation }}
                  />
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Méthodologie</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Du sourcing &agrave; la sortie
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
              Un investissement en chiffres
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <CaseStudy
              tag="Série A — AgriTech"
              title="Structuration d'un tour de table de $400K pour une startup agro-industrielle"
              description="Issue de notre incubateur, une startup spécialisée dans la traçabilité agricole avait besoin de capital pour scaler. Nous avons structuré un tour mixte JuntoX + co-investisseur international, complété en 6 semaines."
              metrics={[
                { value: '$400K', label: 'Capital levé' },
                { value: '6 sem.', label: 'Durée du closing' },
                { value: '3x', label: 'Croissance post-investissement' },
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
              Ce que nos porteurs de projet demandent
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
            Un projet &agrave; financer ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Soumettez votre dossier et recevez un premier retour sous 10 jours ouvrables.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Soumettre un projet</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
