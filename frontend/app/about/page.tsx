'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const pillars = [
  {
    title: 'La connaissance congolaise comme infrastructure',
    description:
      'En RDC, les savoirs locaux sont une richesse sous-exploitee. Nous transformons chaque expertise — congolaise ou internationale — en systemes durables, produits reels et entreprises qui restent. Chaque mission que nous menons devient une brique permanente du developpement local.',
  },
  {
    title: 'La RDC comme source de solutions',
    description:
      'La RDC n\'a pas besoin de copier les modeles d\'ailleurs. Elle a ses propres defis, son propre rythme, ses propres ressources — cobalt, forets, jeunesse, terres agricoles. Nous concevons des solutions nees ici, adaptees au contexte congolais, et capables de s\'exporter ensuite.',
  },
  {
    title: 'L\'impact avant le profit',
    description:
      'Moderniser une PME de Bunia, digitaliser une administration de l\'Ituri, former un ingenieur de Goma, construire une infrastructure en zone reculee — chaque mission JuntoX cree de la valeur reelle, mesurable et durable pour les communautes que nous servons.',
  },
]

const values = [
  { title: 'Excellence', description: 'Chaque detail compte. Livrer du travail mediocre en RDC n\'est pas une option — c\'est une trahison de la mission.' },
  { title: 'Rigueur', description: 'Nos decisions sont fondees sur l\'analyse du terrain, pas sur des hypotheses importees d\'ailleurs.' },
  { title: 'Audace', description: 'Croire qu\'on peut creer de l\'excellence depuis Bunia, Goma ou Kisangani. Et le prouver.' },
  { title: 'Durabilite', description: 'Construire pour les generations de Congolais qui viennent, pas pour le prochain rapport trimestriel.' },
  { title: 'Innovation', description: 'Resoudre les problemes congolais par les premiers principes — pas en copiant des modeles inadaptes.' },
  { title: 'Integrite', description: 'La confiance se bâtit sur la coherence entre ce que nous disons et ce que nous faisons sur le terrain.' },
]

const timeline = [
  { year: '2024', event: 'Fondation de JuntoX SARL à Bunia — premières missions de consultance et développement logiciel' },
  { year: '2025', event: 'Lancement de la plateforme IA, expansion construction, logistique et commerce international' },
  { year: '2026', event: 'Élargissement de l\'objet social — 10 pôles d\'expertise couvrant technologie, ingénierie, communication et secteurs émergents' },
  { year: '2027+', event: 'Échelle continentale, partenariats internationaux, déploiement FinTech, EdTech, Énergie et AgriTech' },
]

const faqs = [
  {
    question: 'JuntoX est-elle un groupe ou une seule entreprise ?',
    answer: 'JuntoX est une SARL dont l\'objet social couvre 10 pôles d\'expertise : technologies, ingénierie, construction, logistique, conseil, formation, communication, investissement et secteurs émergents. Nous opérons comme un groupe intégré depuis une structure unique, ce qui nous permet de proposer des solutions multidisciplinaires sans rupture.',
  },
  {
    question: 'JuntoX est-elle une société de conseil, une entreprise tech ou un fonds d\'investissement ?',
    answer: 'Les trois à la fois — et c\'est précisément notre différenciation. Nous combinons conseil stratégique, développement logiciel, ingénierie, construction, communication et capital pour accompagner un projet de l\'idée jusqu\'à l\'industrialisation, sans rupture entre les étapes.',
  },
  {
    question: 'Où JuntoX opère-t-elle aujourd\'hui ?',
    answer: 'Notre siège est à Bunia, en Ituri, RD Congo. Nous intervenons activement en Afrique centrale et de l\'Est, avec des clients et partenaires en Europe et en Asie pour le commerce international et l\'investissement.',
  },
  {
    question: 'Comment JuntoX se finance-t-elle ?',
    answer: 'Par les revenus de nos missions de consultance et de construction, complétés par des investissements stratégiques de partenaires qui partagent notre vision à long terme.',
  },
  {
    question: 'Quelle est la structure juridique de l\'entreprise ?',
    answer: 'JuntoX est une Société à Responsabilité Limitée (SARL) enregistrée en République Démocratique du Congo, conforme aux réglementations locales en vigueur.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="A propos"
        title="Nes en Ituri. Construits pour la RDC. Ouverts au monde."
        description="JuntoX est nee a Bunia, au coeur de l'Est congolais, avec une conviction claire : la Republique Democratique du Congo a tout ce qu'il faut pour se transformer de l'interieur. Notre role est de fournir les outils, les competences et les structures pour que cela arrive — projet apres projet."
      >
        <Button href="/vision">Découvrir notre vision</Button>
        <Button href="/contact" variant="secondary">Nous contacter</Button>
      </PageHero>

      {/* Stats */}
      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 2024, suffix: '', label: 'Année de fondation' },
            { target: 10, suffix: '', label: 'Pôles d\'expertise' },
            { target: 50, suffix: '+', label: 'Services proposés' },
            { target: 100, suffix: '+', label: 'Années de vision' },
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

      {/* Pillars */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Nos fondations</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Trois piliers pour une entreprise centenaire
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.12}>
                <div className="card-base h-full">
                  <div className="mb-4 h-1 w-12 rounded-full bg-primary/60" />
                  <h3 className="font-serif text-heading-3 font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-body text-neutral-400">{pillar.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Values */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="accent">Nos valeurs</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Ce qui guide chaque décision
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div className="card-base">
                  <h4 className="text-base font-semibold text-white">{value.title}</h4>
                  <p className="mt-2 text-sm text-neutral-500">{value.description}</p>
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
            <Badge>Notre parcours</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Une trajectoire ambitieuse et mesurée
            </h2>
          </AnimatedSection>

          <div className="mt-14 space-y-0">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div className="flex gap-8 border-l border-white/[0.08] py-8 pl-8">
                  <span className="text-heading-2 font-semibold text-primary/80">{item.year}</span>
                  <p className="text-body-lg text-neutral-300 pt-2">{item.event}</p>
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

      <section className="section-padding relative overflow-hidden">
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
