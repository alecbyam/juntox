'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const openings = [
  {
    title: 'Ingénieur Full-Stack Senior',
    department: 'Technologie',
    location: 'Bunia / Remote',
    type: 'Temps plein',
    description: 'Concevoir et développer les briques techniques de la plateforme JuntoX : frontend Next.js, API FastAPI, intégrations IA.',
  },
  {
    title: 'Data Scientist / ML Engineer',
    department: 'Laboratoire IA',
    location: 'Bunia / Remote',
    type: 'Temps plein',
    description: 'Développer les modèles d\'IA qui alimentent nos services : analyse de projets, estimation de coûts, prédiction de marché.',
  },
  {
    title: 'Consultant Stratégie',
    department: 'Consultance',
    location: 'Bunia',
    type: 'Temps plein',
    description: 'Mener des études stratégiques, accompagner les clients dans leurs décisions et produire des analyses de haute qualité.',
  },
  {
    title: 'Chef de Projet Construction',
    department: 'Construction',
    location: 'Bunia',
    type: 'Temps plein',
    description: 'Gérer et superviser des projets de construction, de la conception à la livraison.',
  },
  {
    title: 'Business Developer',
    department: 'Commercial',
    location: 'Bunia',
    type: 'Temps plein',
    description: 'Développer les relations commerciales, identifier les opportunités et structurer les partenariats stratégiques.',
  },
]

const values = [
  { title: 'Impact', description: 'Votre travail transforme directement des entreprises et des territoires.' },
  { title: 'Autonomie', description: 'Nous faisons confiance à notre équipe pour prendre des décisions et innover.' },
  { title: 'Croissance', description: 'Formation continue, mentorat et accès à des projets de plus en plus ambitieux.' },
  { title: 'Diversité', description: 'Une équipe multidisciplinaire où chaque perspective enrichit le collectif.' },
]

const benefits = [
  { title: 'Rémunération compétitive', description: 'Salaires alignés sur les standards du marché technologique régional, avec primes de performance.' },
  { title: 'Formation continue', description: 'Accès gratuit à tous nos programmes de formation JuntoX et budget formation externe annuel.' },
  { title: 'Flexibilité', description: 'Modèle hybride pour la plupart des postes techniques, avec horaires aménageables.' },
  { title: 'Équipement fourni', description: 'Matériel informatique haut de gamme et abonnements outils nécessaires à votre poste.' },
  { title: 'Couverture santé', description: 'Assurance médicale complète pour vous et vos ayants droit.' },
  { title: 'Participation aux résultats', description: 'Programme de primes lié à la performance de l\'entreprise pour les postes seniors.' },
]

const process = [
  { step: 'Candidature', description: 'Envoyez votre CV et lettre de motivation via notre formulaire de contact.' },
  { step: 'Entretien RH', description: 'Échange de 30 minutes pour comprendre votre parcours et vos motivations.' },
  { step: 'Test technique', description: 'Étude de cas ou exercice pratique adapté au poste visé.' },
  { step: 'Entretien final', description: 'Rencontre avec l\'équipe et la direction pour valider l\'adéquation mutuelle.' },
]

const faqs = [
  {
    question: 'Combien de temps dure le processus de recrutement ?',
    answer: 'En moyenne 2 à 3 semaines entre la candidature et l\'offre finale, selon la disponibilité des parties prenantes.',
  },
  {
    question: 'Le télétravail est-il possible ?',
    answer: 'Oui pour les postes techniques (développement, data science). Les postes terrain (construction, consultance) nécessitent une présence à Bunia.',
  },
  {
    question: 'Recrutez-vous des profils juniors ou en reconversion ?',
    answer: 'Oui, en particulier via notre Bootcamp Entrepreneuriat et nos programmes de formation, qui constituent un vivier de recrutement pour certains postes.',
  },
  {
    question: 'Puis-je postuler même si aucun poste ne correspond exactement ?',
    answer: 'Absolument. Nous étudions toutes les candidatures spontanées et créons parfois des postes pour des profils exceptionnels.',
  },
]

export default function CarrieresPage() {
  return (
    <>
      <PageHero
        eyebrow="Carrières"
        title="Construisez le futur avec nous"
        description="JuntoX recrute les talents les plus ambitieux — ingénieurs, consultants, chercheurs, managers — qui veulent avoir un impact réel et durable sur le continent africain."
      >
        <Button href="#postes">Voir les postes ouverts</Button>
      </PageHero>

      {/* Stats */}
      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 24, suffix: '+', label: 'Collaborateurs' },
            { target: 5, suffix: '', label: 'Postes ouverts' },
            { target: 6, suffix: '', label: 'Départements' },
            { target: 3, suffix: ' sem.', label: 'Délai de recrutement' },
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

      {/* Values */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Pourquoi nous rejoindre</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Une culture d&apos;excellence et d&apos;impact
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div className="card-base h-full text-center">
                  <h3 className="text-base font-semibold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="gold">Avantages</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Ce que nous offrons
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.08}>
                <div className="card-base h-full">
                  <h3 className="text-base font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Openings */}
      <section id="postes" className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="primary">Postes ouverts</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Rejoignez l&apos;équipe
            </h2>
          </AnimatedSection>

          <div className="mt-14 space-y-4">
            {openings.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.08}>
                <div className="card-interactive group">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                      <p className="mt-2 text-sm text-neutral-400">{job.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-neutral-500">{job.department}</span>
                        <span className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-neutral-500">{job.location}</span>
                        <span className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-neutral-500">{job.type}</span>
                      </div>
                    </div>
                    <span className="text-sm text-neutral-600 transition group-hover:text-primary">
                      Postuler &rarr;
                    </span>
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
            <Badge variant="accent">Processus</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Comment se déroule le recrutement
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

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection className="max-w-2xl">
            <Badge>Questions fréquentes</Badge>
            <h2 className="mt-6 font-serif text-heading-1 font-semibold text-white">
              Ce que nos futurs candidats demandent
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
            Votre poste n&apos;est pas listé ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Envoyez-nous votre candidature spontanée. Les meilleurs talents trouvent toujours leur place chez JuntoX.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Candidature spontanée</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
