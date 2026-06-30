'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { CaseStudy } from '../../components/ui/CaseStudy'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const partnerTypes = [
  {
    title: 'Partenaires technologiques',
    description: 'Entreprises de logiciels, fournisseurs cloud et sociétés d\'IA qui partagent notre vision d\'innovation.',
  },
  {
    title: 'Partenaires institutionnels',
    description: 'Gouvernements, organisations internationales et agences de développement qui soutiennent la croissance technologique en Afrique.',
  },
  {
    title: 'Partenaires académiques',
    description: 'Universités et centres de recherche pour la R&D, la formation et le transfert de connaissances.',
  },
  {
    title: 'Partenaires commerciaux',
    description: 'Entreprises qui distribuent nos services ou intègrent nos solutions dans leurs opérations.',
  },
]

const benefits = [
  'Accès à la plateforme JuntoX et ses outils IA',
  'Co-développement de solutions innovantes',
  'Réseau de clients et d\'investisseurs qualifiés',
  'Visibilité et co-branding sur nos canaux',
  'Participation aux programmes de recherche',
  'Accès prioritaire aux opportunités d\'investissement',
]

const faqs = [
  {
    question: 'Quel est le niveau d\'engagement minimum pour un partenariat ?',
    answer: 'Cela dépend du type de partenariat. Un partenariat technologique peut démarrer par une simple intégration API, tandis qu\'un partenariat institutionnel implique généralement un accord-cadre formel.',
  },
  {
    question: 'Les partenariats sont-ils exclusifs ?',
    answer: 'Non, sauf accord spécifique. Nous privilégions des partenariats ouverts qui permettent à chaque partie de collaborer avec d\'autres acteurs de l\'écosystème.',
  },
  {
    question: 'Comment se déroule la mise en relation ?',
    answer: 'Après votre prise de contact, nous organisons un échange de cadrage sous 5 jours ouvrables pour explorer les synergies possibles et définir un format adapté.',
  },
  {
    question: 'Un partenariat académique implique-t-il un financement ?',
    answer: 'Pas nécessairement. Beaucoup de nos collaborations académiques portent sur l\'échange de connaissances, l\'encadrement d\'étudiants ou la co-publication, sans transaction financière.',
  },
]

export default function PartenairesPage() {
  return (
    <>
      <PageHero
        eyebrow="Partenaires"
        title="Construisons l'écosystème ensemble"
        description="JuntoX croit en la puissance des partenariats stratégiques. Nous construisons un réseau d'entreprises, d'institutions et d'organisations qui partagent notre vision d'une Afrique technologique et innovante."
      >
        <Button href="/contact">Devenir partenaire</Button>
      </PageHero>

      {/* Stats */}
      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 8, suffix: '+', label: 'Partenaires actifs' },
            { target: 4, suffix: '', label: 'Types de partenariat' },
            { target: 3, suffix: '', label: 'Pays représentés' },
            { target: 5, suffix: ' j.', label: 'Délai de premier contact' },
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
            <Badge>Types de partenariats</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Plusieurs façons de collaborer
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {partnerTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 0.1}>
                <div className="card-base h-full">
                  <h3 className="font-serif text-heading-3 font-semibold text-white">{type.title}</h3>
                  <p className="mt-4 text-body text-neutral-400">{type.description}</p>
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
              <Badge variant="primary">Avantages</Badge>
              <h2 className="mt-6 font-serif text-heading-1 font-semibold text-white">
                Ce que vous gagnez
              </h2>
              <p className="mt-5 text-body text-neutral-400">
                Un partenariat avec JuntoX ouvre l&apos;accès à un écosystème unique d&apos;innovation, de capital et de talent en Afrique.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="card-base !p-5 flex gap-4 items-center">
                    <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <p className="text-sm text-neutral-300">{benefit}</p>
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
              Un partenariat en chiffres
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <CaseStudy
              tag="Partenariat académique — Université locale"
              title="Co-encadrement de recherche appliquée en IA agricole"
              description="En partenariat avec une université de Bunia, JuntoX a co-encadré une équipe de chercheurs sur un projet de traçabilité agricole par IA, depuis devenu un prototype actif de notre laboratoire."
              metrics={[
                { value: '6 mois', label: 'Durée de collaboration' },
                { value: '4', label: 'Chercheurs impliqués' },
                { value: '1', label: 'Prototype livré' },
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
              Ce que nos futurs partenaires demandent
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding">
        <AnimatedSection className="container-content text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Devenez partenaire de JuntoX
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Contactez-nous pour explorer les synergies et construire un partenariat à fort impact.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Nous contacter</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
