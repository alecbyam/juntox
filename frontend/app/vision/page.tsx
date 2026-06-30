'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const principles = [
  {
    number: '01',
    title: 'Audace intellectuelle',
    description:
      'Prendre le temps d\'analyser afin de décider avec pertinence. Penser en premiers principes plutôt que par analogie.',
  },
  {
    number: '02',
    title: 'Rigueur opérationnelle',
    description:
      'Concevoir des systèmes robustes qui tiennent leurs promesses sur le terrain. L\'exécution est la seule mesure qui compte.',
  },
  {
    number: '03',
    title: 'Échelle africaine, standard mondial',
    description:
      'Imaginer des plateformes qui rayonnent à l\'échelle continentale puis mondiale, sans compromettre la qualité.',
  },
  {
    number: '04',
    title: 'Technologie comme levier',
    description:
      'L\'IA, le logiciel et l\'automatisation ne sont pas des fins en soi. Ce sont des instruments au service de la résolution de problèmes.',
  },
]

const ambitions = [
  {
    title: 'Construire pour 100 ans',
    description: 'Nous ne construisons pas pour la prochaine levée de fonds. Nous construisons pour les générations futures.',
  },
  {
    title: 'Devenir une référence',
    description: 'Être l\'entreprise à laquelle on pense quand on parle d\'innovation technologique en Afrique.',
  },
  {
    title: 'Transformer l\'intelligence en capital',
    description: 'Créer un pont systémique entre la connaissance, l\'ingénierie et la création de valeur économique.',
  },
]

const horizons = [
  { period: '2024 – 2026', focus: 'Consolidation', description: 'Asseoir notre expertise en IA, consultance et construction sur le marché congolais.' },
  { period: '2027 – 2030', focus: 'Expansion régionale', description: 'Étendre nos opérations à l\'Afrique centrale et de l\'Ouest, renforcer l\'incubateur.' },
  { period: '2031 +', focus: 'Échelle continentale', description: 'Devenir une plateforme de référence panafricaine reconnue mondialement.' },
]

const faqs = [
  {
    question: 'Pourquoi viser 100 ans plutôt qu\'une sortie rapide ?',
    answer: 'Les entreprises qui durent — Harvard, Microsoft, Mitsubishi — ont toutes une chose en commun : elles ont été pensées comme des institutions, pas comme des produits à vendre. Nous appliquons la même logique à JuntoX.',
  },
  {
    question: 'Le "First Principles Thinking", concrètement, ça change quoi ?',
    answer: 'Plutôt que de copier des modèles d\'affaires occidentaux, nous reconstruisons chaque solution à partir des contraintes réelles du terrain africain — infrastructures, réglementation, pouvoir d\'achat — pour des produits réellement adaptés.',
  },
  {
    question: 'Comment mesurez-vous le succès de cette vision ?',
    answer: 'Au-delà des indicateurs financiers, nous suivons l\'impact territorial : emplois créés, compétences transférées, entreprises accompagnées et infrastructures livrées.',
  },
  {
    question: 'Cette vision est-elle partagée avec les employés ?',
    answer: 'Oui, chaque collaborateur JuntoX est formé à notre Golden Circle (Why-How-What) dès son arrivée, et les décisions stratégiques sont communiquées en toute transparence en interne.',
  },
]

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre Vision"
        title="Construire une entreprise qui inspire et qui dure"
        description="Si aucune entreprise n'existait aujourd'hui, comment construirions-nous la meilleure entreprise technologique africaine ? C'est la question qui guide chaque décision chez JuntoX."
        badge="accent"
      >
        <Button href="/about">En savoir plus</Button>
        <Button href="/services" variant="secondary">Nos services</Button>
      </PageHero>

      {/* Stats */}
      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-3">
          {[
            { target: 100, suffix: '+', label: 'Années d\'horizon visé' },
            { target: 4, suffix: '', label: 'Principes directeurs' },
            { target: 3, suffix: '', label: 'Horizons stratégiques' },
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

      {/* Principles */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Principes directeurs</Badge>
            <h2 className="mt-6 max-w-3xl font-serif text-heading-1 font-semibold text-white">
              Quatre principes pour une entreprise exceptionnelle
            </h2>
          </AnimatedSection>

          <div className="mt-16 space-y-6">
            {principles.map((principle, i) => (
              <AnimatedSection key={principle.number} delay={i * 0.1}>
                <div className="card-base flex flex-col gap-6 sm:flex-row sm:items-start">
                  <span className="text-display font-serif font-semibold text-white/[0.06]">
                    {principle.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-heading-3 font-semibold text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-body text-neutral-400">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Horizons */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="gold">Feuille de route</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Trois horizons strat&eacute;giques
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {horizons.map((horizon, i) => (
              <AnimatedSection key={horizon.period} delay={i * 0.1}>
                <div className="card-featured h-full">
                  <span className="text-sm font-medium text-primary-light">{horizon.period}</span>
                  <h3 className="mt-3 font-serif text-heading-3 font-semibold text-white">{horizon.focus}</h3>
                  <p className="mt-4 text-sm text-neutral-400">{horizon.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Ambitions */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center">
            <Badge variant="primary">Notre ambition</Badge>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-heading-1 font-semibold text-white">
              Ce que nous visons à long terme
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {ambitions.map((ambition, i) => (
              <AnimatedSection key={ambition.title} delay={i * 0.12}>
                <div className="card-base h-full text-center">
                  <h3 className="font-serif text-heading-3 font-semibold text-white">
                    {ambition.title}
                  </h3>
                  <p className="mt-4 text-body text-neutral-400">{ambition.description}</p>
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
              Ce que l&apos;on nous demande souvent
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />
        </div>
        <AnimatedSection className="container-content relative text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Prêt à faire partie de l&apos;aventure ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Investisseurs, partenaires, talents — contactez-nous pour construire ensemble.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">Nous contacter</Button>
            <Button href="/carrieres" variant="secondary" size="lg">Rejoindre l&apos;équipe</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
