'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const labProjects = [
  {
    title: 'JuntoX AI Assistant',
    description: 'Assistant conversationnel intégré capable d\'analyser des projets, générer des business plans et produire des rapports automatisés.',
    status: 'En production',
  },
  {
    title: 'Moteur d\'estimation',
    description: 'Algorithmes de machine learning pour l\'estimation précise des coûts de construction et de projets d\'infrastructure.',
    status: 'En développement',
  },
  {
    title: 'Analyse prédictive',
    description: 'Modèles prédictifs pour anticiper les tendances de marché et optimiser les décisions d\'investissement.',
    status: 'Recherche',
  },
  {
    title: 'NLP africain',
    description: 'Traitement du langage naturel adapté aux langues africaines et aux contextes locaux.',
    status: 'Recherche',
  },
]

const stack = [
  { name: 'GPT-4o-mini', use: 'Analyse de texte et génération de rapports' },
  { name: 'Python / FastAPI', use: 'Orchestration des services IA' },
  { name: 'PostgreSQL', use: 'Stockage des historiques d\'analyses' },
  { name: 'Modèles de vision', use: 'Évaluation qualité agricole (prototype)' },
]

const faqs = [
  {
    question: 'Le laboratoire IA est-il une entité séparée de JuntoX ?',
    answer: 'Non, c\'est un département interne transversal qui alimente l\'ensemble des services JuntoX — consultance, construction, logistique — avec des modèles d\'IA adaptés à chaque secteur.',
  },
  {
    question: 'Utilisez-vous des modèles propriétaires ou des API tierces ?',
    answer: 'Nous combinons les deux : des modèles fondation (comme GPT-4o-mini) pour le langage naturel, et des modèles propriétaires entraînés sur nos données sectorielles pour l\'estimation et la prédiction.',
  },
  {
    question: 'Mes données sont-elles utilisées pour entraîner vos modèles ?',
    answer: 'Non sans votre consentement explicite. Les données clients restent confidentielles et ne sont jamais réutilisées pour l\'entraînement sans accord contractuel spécifique.',
  },
  {
    question: 'Puis-je proposer une collaboration de recherche en IA ?',
    answer: 'Oui, nous sommes ouverts aux collaborations avec des chercheurs, universités et laboratoires intéressés par l\'IA appliquée au contexte africain.',
  },
]

export default function LaboratoireIAPage() {
  return (
    <>
      <PageHero
        eyebrow="Laboratoire IA"
        title="Là où l'intelligence artificielle devient infrastructure"
        description="Notre laboratoire IA est le moteur d'innovation de JuntoX. Nous y développons les modèles, algorithmes et systèmes intelligents qui alimentent l'ensemble de notre plateforme."
        badge="accent"
      >
        <Button href="/ai">Tester JuntoX AI</Button>
        <Button href="/contact" variant="secondary">Collaborer avec le lab</Button>
      </PageHero>

      {/* Stats */}
      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 3, suffix: '', label: 'Modèles en production' },
            { target: 2, suffix: '', label: 'Projets de recherche actifs' },
            { target: 4, suffix: '', label: 'Briques technologiques' },
            { target: 8, suffix: '', label: 'Secteurs alimentés par l\'IA' },
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
            <Badge variant="accent">Projets actifs</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Ce sur quoi nous travaillons
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {labProjects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <div className="card-base h-full">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-heading-3 font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                      project.status === 'En production'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : project.status === 'En développement'
                        ? 'bg-accent/10 text-accent-light border border-accent/20'
                        : 'bg-white/[0.04] text-neutral-400 border border-white/[0.08]'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-4 text-body text-neutral-400">{project.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Stack */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="gold">Stack technique</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Les briques de notre IA
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.08}>
                <div className="card-base h-full text-center">
                  <h4 className="font-mono text-sm font-semibold text-white">{item.name}</h4>
                  <p className="mt-2 text-xs text-neutral-500">{item.use}</p>
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
            <Badge variant="primary">Vision</Badge>
            <h2 className="mt-6 max-w-3xl font-serif text-heading-1 font-semibold text-white">
              L&apos;IA comme levier fondamental, pas comme gadget
            </h2>
            <p className="mt-5 max-w-2xl text-body-lg text-neutral-400">
              Nous ne cherchons pas à ajouter de l&apos;IA pour le plaisir. Chaque modèle que nous
              développons résout un problème concret et génère une valeur mesurable pour nos clients,
              partenaires et investisseurs.
            </p>
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
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />
        </div>
        <AnimatedSection className="container-content relative text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Collaborez avec notre laboratoire
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Chercheurs, ingénieurs IA, institutions — travaillons ensemble sur les prochains défis.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">Nous contacter</Button>
            <Button href="/carrieres" variant="secondary" size="lg">Rejoindre le lab</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
