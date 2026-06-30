'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { GridPattern } from '../../components/ui/GridPattern'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const highlights = [
  { target: 2, suffix: 'T+', prefix: '$', label: 'Marché adressable en Afrique' },
  { target: 1, suffix: '.4B', label: 'Population du continent' },
  { target: 8, suffix: '', label: 'Secteurs d\'activité' },
  { target: 100, suffix: '+', label: 'Années de vision' },
]

const thesis = [
  {
    title: 'Plateforme, pas produit',
    description: 'JuntoX n\'est pas un produit unique — c\'est une plateforme modulaire qui génère de la valeur dans 8 secteurs simultanément.',
  },
  {
    title: 'Marché sous-pénétré',
    description: 'L\'Afrique représente 17% de la population mondiale mais moins de 3% de l\'économie numérique. L\'écart est une opportunité.',
  },
  {
    title: 'IA comme avantage compétitif',
    description: 'Notre intégration native de l\'IA dans chaque service crée un avantage systémique difficile à reproduire.',
  },
  {
    title: 'Équipe et exécution',
    description: 'Une équipe multidisciplinaire avec une connaissance approfondie du terrain et une obsession pour l\'exécution.',
  },
]

const investorTypes = [
  {
    title: 'Investisseurs institutionnels',
    description: 'Fonds de capital-risque, fonds de private equity et institutions de développement.',
  },
  {
    title: 'Family offices',
    description: 'Familles et entrepreneurs qui cherchent une exposition à l\'innovation africaine.',
  },
  {
    title: 'Investisseurs stratégiques',
    description: 'Entreprises qui souhaitent co-investir et collaborer opérationnellement.',
  },
  {
    title: 'Investisseurs d\'impact',
    description: 'Acteurs qui cherchent un retour financier couplé à un impact social mesurable.',
  },
]

const faqs = [
  {
    question: 'Comment puis-je investir directement dans JuntoX ?',
    answer: 'Contactez notre équipe pour recevoir notre deck investisseur complet. Selon votre profil, nous structurons soit une prise de participation directe, soit un co-investissement dans notre pipeline de deals.',
  },
  {
    question: 'Quel est le ticket d\'entrée minimum ?',
    answer: 'Cela varie selon le véhicule d\'investissement — participation directe au capital de JuntoX, ou co-investissement dans une entreprise du portefeuille. Nous adaptons la structure à chaque profil d\'investisseur.',
  },
  {
    question: 'JuntoX publie-t-elle des rapports financiers réguliers ?',
    answer: 'Les investisseurs ont accès à des rapports trimestriels détaillés via leur espace dédié sur la plateforme, incluant performance, pipeline et indicateurs d\'impact.',
  },
  {
    question: 'Quelle est la stratégie de sortie pour les investisseurs ?',
    answer: 'Nous envisageons plusieurs horizons : croissance organique avec distribution de dividendes, levées de fonds successives, ou ouverture du capital à des partenaires stratégiques internationaux à long terme.',
  },
]

export default function InvestisseursPage() {
  return (
    <>
      <PageHero
        eyebrow="Investisseurs"
        title="Investir dans l'infrastructure technologique africaine"
        description="JuntoX construit la plateforme qui liera IA, ingénierie, capital et formation pour transformer les entreprises africaines. Rejoignez-nous comme investisseur."
        badge="primary"
      >
        <Button href="/contact">Nous contacter</Button>
        <Button href="/about" variant="secondary">Découvrir JuntoX</Button>
      </PageHero>

      {/* Key metrics */}
      <section className="relative overflow-hidden border-b border-white/[0.04]">
        <GridPattern className="opacity-20" />
        <div className="container-content relative grid grid-cols-2 gap-px md:grid-cols-4">
          {highlights.map((stat) => (
            <div key={stat.label} className="px-6 py-10 text-center md:px-8 md:py-14">
              <p className="font-serif text-display font-semibold text-white">
                <AnimatedCounter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-caption text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investment thesis */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="primary">Thèse d&apos;investissement</Badge>
            <h2 className="mt-6 max-w-3xl font-serif text-heading-1 font-semibold text-white">
              Pourquoi investir dans JuntoX
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {thesis.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="card-base h-full">
                  <div className="mb-4 h-1 w-12 rounded-full bg-primary/60" />
                  <h3 className="font-serif text-heading-3 font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-body text-neutral-400">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Investor types */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="accent">Qui nous recherchons</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Profils d&apos;investisseurs
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {investorTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 0.1}>
                <div className="card-base h-full">
                  <h4 className="text-base font-semibold text-white">{type.title}</h4>
                  <p className="mt-3 text-sm text-neutral-400">{type.description}</p>
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
              Ce que nos investisseurs demandent
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
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-[130px]" />
        </div>
        <AnimatedSection className="container-content relative text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Prêt à investir dans le futur de l&apos;Afrique ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Contactez notre équipe pour recevoir notre deck investisseur et discuter des opportunités.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">Demander le deck</Button>
            <Button href="/portfolio" variant="secondary" size="lg">Voir le portfolio</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
