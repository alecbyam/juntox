'use client'

import { useState } from 'react'
import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const categories = ['Tous', 'Technologie', 'Intelligence Artificielle', 'Consultance', 'Construction', 'Formation', 'Investissement']

const projects = [
  {
    title: 'Plateforme JuntoX',
    category: 'Technologie',
    description: 'Conception et développement de la plateforme numérique intégrée de JuntoX — site institutionnel, dashboards multi-rôles, API et assistant IA.',
    status: 'En cours',
    tags: ['Next.js', 'FastAPI', 'IA', 'PostgreSQL'],
  },
  {
    title: 'JuntoX AI',
    category: 'Intelligence Artificielle',
    description: 'Développement de l\'assistant IA capable d\'analyser des projets, générer des business plans et produire des rapports stratégiques automatisés.',
    status: 'En production',
    tags: ['OpenAI', 'Python', 'NLP'],
  },
  {
    title: 'Études de marché RDC',
    category: 'Consultance',
    description: 'Études stratégiques sur les opportunités d\'investissement dans le secteur technologique en République Démocratique du Congo.',
    status: 'Complété',
    tags: ['Recherche', 'Analyse', 'Stratégie'],
  },
  {
    title: 'Programme Tech Leaders',
    category: 'Formation',
    description: 'Programme intensif de formation en leadership technologique pour les entrepreneurs et managers africains.',
    status: 'En cours',
    tags: ['Formation', 'Leadership', 'Tech'],
  },
  {
    title: 'Terminal logistique 4 200 m²',
    category: 'Construction',
    description: 'Estimation et supervision de la construction d\'un terminal de fret, livré dans les délais malgré la saison des pluies.',
    status: 'Complété',
    tags: ['Construction', 'Logistique', 'IA estimation'],
  },
  {
    title: 'Série A AgriTech',
    category: 'Investissement',
    description: 'Structuration d\'un tour de table de $400K pour une startup de traçabilité agricole issue de notre incubateur.',
    status: 'Complété',
    tags: ['Investissement', 'AgriTech', 'Incubation'],
  },
  {
    title: 'Audit chaîne du froid',
    category: 'Consultance',
    description: 'Audit et redesign logistique pour un distributeur de produits frais, réduisant les pertes de 18% à 4%.',
    status: 'Complété',
    tags: ['Logistique', 'Audit', 'Agro-industrie'],
  },
  {
    title: 'Bootcamp Entrepreneuriat — Cohorte 3',
    category: 'Formation',
    description: '18 entrepreneurs formés sur 12 semaines, 9 entreprises lancées et 3 financements obtenus.',
    status: 'Complété',
    tags: ['Formation', 'Entrepreneuriat', 'Mentorat'],
  },
]

export default function PortfolioPage() {
  const [filter, setFilter] = useState('Tous')
  const filtered = filter === 'Tous' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Nos projets et réalisations"
        description="Chaque projet que nous menons est une preuve de notre engagement envers l'excellence, l'innovation et l'impact durable. Découvrez ce que nous construisons."
      >
        <Button href="/contact">Proposer un projet</Button>
      </PageHero>

      {/* Stats */}
      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 8, suffix: '+', label: 'Projets en vedette' },
            { target: 6, suffix: '', label: 'Domaines couverts' },
            { target: 5, suffix: '', label: 'Projets complétés' },
            { target: 3, suffix: '', label: 'Projets en cours' },
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
          {/* Filters */}
          <AnimatedSection className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  filter === cat
                    ? 'border-primary/40 bg-primary/[0.08] text-primary-light'
                    : 'border-white/[0.08] bg-white/[0.02] text-neutral-500 hover:border-white/[0.14] hover:text-neutral-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.06}>
                <div className="card-base h-full">
                  <div className="flex items-start justify-between gap-4">
                    <Badge variant={project.status === 'En production' ? 'accent' : 'default'}>
                      {project.category}
                    </Badge>
                    <span className={`text-xs font-medium ${
                      project.status === 'En production'
                        ? 'text-green-400'
                        : project.status === 'En cours'
                        ? 'text-accent-light'
                        : 'text-neutral-500'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-heading-3 font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-body text-neutral-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-neutral-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-neutral-500">Aucun projet dans cette catégorie pour le moment.</p>
          )}
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding">
        <AnimatedSection className="container-content text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Votre projet pourrait être le prochain
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Partagez votre idée avec nous et découvrons comment JuntoX peut l&apos;accélérer.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Discuter d&apos;un projet</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
