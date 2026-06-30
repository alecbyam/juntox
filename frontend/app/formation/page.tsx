'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { CaseStudy } from '../../components/ui/CaseStudy'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const programs = [
  {
    title: 'Leadership Technologique',
    duration: '8 semaines',
    format: 'Hybride (présentiel + en ligne)',
    description: 'Pour les dirigeants qui veulent intégrer la technologie dans leur stratégie d\'entreprise.',
  },
  {
    title: 'IA Appliquée',
    duration: '6 semaines',
    format: 'En ligne',
    description: 'Formation pratique à l\'intelligence artificielle pour professionnels et entrepreneurs non-techniques.',
  },
  {
    title: 'Bootcamp Entrepreneuriat',
    duration: '12 semaines',
    format: 'Présentiel — Kinshasa',
    description: 'De l\'idée au business model viable, avec mentorat individuel et pitch final devant investisseurs.',
  },
  {
    title: 'Gestion de Projets Agile',
    duration: '4 semaines',
    format: 'En ligne',
    description: 'Méthodologies agiles, gestion de produit et delivery à grande échelle.',
  },
  {
    title: 'Compétences Digitales',
    duration: '6 semaines',
    format: 'Hybride',
    description: 'Outils numériques, bases du développement web et analyse de données.',
  },
  {
    title: 'Formation sur mesure',
    duration: 'Variable',
    format: 'Sur site',
    description: 'Programmes personnalisés conçus avec votre entreprise selon vos besoins spécifiques.',
  },
]

const formatDetails = [
  { title: 'Pratique avant tout', description: 'Chaque module se termine par un projet réel appliqué au contexte de l\'apprenant.' },
  { title: 'Mentorat individuel', description: 'Un mentor dédié accompagne chaque participant tout au long du programme.' },
  { title: 'Cohortes restreintes', description: 'Maximum 20 participants par cohorte pour garantir un suivi personnalisé.' },
  { title: 'Certification JuntoX', description: 'Certificat reconnu par notre réseau de partenaires entreprises.' },
]

const faqs = [
  {
    question: 'Faut-il un niveau technique préalable pour suivre vos formations ?',
    answer: 'Non. Nos programmes IA Appliquée et Compétences Digitales sont conçus pour les profils non-techniques. Seuls certains modules avancés requièrent des prérequis, clairement indiqués.',
  },
  {
    question: 'Les formations sont-elles certifiantes ?',
    answer: 'Oui, chaque programme complété donne lieu à un certificat JuntoX, reconnu par notre réseau de partenaires et d\'entreprises clientes.',
  },
  {
    question: 'Proposez-vous des formations en entreprise ?',
    answer: 'Oui, nous concevons des programmes sur mesure pour les équipes, livrés sur site ou en ligne, adaptés aux enjeux spécifiques de votre organisation.',
  },
  {
    question: 'Quel est le taux de réussite du bootcamp entrepreneuriat ?',
    answer: 'Sur les trois dernières cohortes, 70% des participants ont lancé une activité ou obtenu un financement dans les 6 mois suivant le programme.',
  },
]

export default function FormationPage() {
  return (
    <>
      <PageHero
        eyebrow="Formation"
        title="Former la prochaine génération de leaders technologiques"
        description="Nous croyons que le capital humain est le levier le plus puissant. Nos programmes préparent les entrepreneurs, ingénieurs et managers qui porteront la prochaine génération d'entreprises africaines."
      >
        <Button href="/contact">S&apos;inscrire</Button>
        <Button href="#programmes" variant="secondary">Voir les programmes</Button>
      </PageHero>

      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 6, suffix: '', label: 'Programmes actifs' },
            { target: 300, suffix: '+', label: 'Alumni formés' },
            { target: 70, suffix: '%', label: 'Taux de réussite bootcamp' },
            { target: 20, suffix: '', label: 'Participants max/cohorte' },
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

      <section id="programmes" className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="primary">Programmes</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Six parcours pour monter en comp&eacute;tence
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {programs.map((program, i) => (
              <AnimatedSection key={program.title} delay={i * 0.08}>
                <div className="card-base h-full">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white">{program.title}</h3>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/[0.06] px-3 py-1 text-xs text-primary-light">{program.duration}</span>
                    <span className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-neutral-500">{program.format}</span>
                  </div>
                  <p className="mt-4 text-sm text-neutral-400">{program.description}</p>
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
            <Badge variant="accent">Notre format</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Ce qui rend nos formations diff&eacute;rentes
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {formatDetails.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="card-base h-full">
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-neutral-500">{item.description}</p>
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
              Une cohorte en chiffres
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <CaseStudy
              tag="Bootcamp Entrepreneuriat — Cohorte 3"
              title="18 entrepreneurs, 12 semaines, 9 entreprises lancées"
              description="La troisième cohorte du Bootcamp Entrepreneuriat a réuni 18 participants venus de Kinshasa, Lubumbashi et Goma. À l'issue du programme, 9 ont lancé leur activité et 3 ont obtenu un premier financement via notre réseau d'investisseurs partenaires."
              metrics={[
                { value: '18', label: 'Participants' },
                { value: '9', label: 'Entreprises lancées' },
                { value: '3', label: 'Financements obtenus' },
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
              Ce que nos futurs participants demandent
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
            Investissez dans le capital humain
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Découvrez nos prochaines sessions et inscrivez-vous ou votre équipe.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">S&apos;inscrire</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
