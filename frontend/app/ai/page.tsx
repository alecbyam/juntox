'use client'

import { useState, type FormEvent } from 'react'
import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { postJson } from '../../lib/api'

const capabilities = [
  { title: 'Analyse de projets', description: 'Évaluation structurée des forces, risques et recommandations pour tout projet d\'entreprise ou de développement.' },
  { title: 'Business plans', description: 'Génération de plans d\'affaires complets avec modèle de revenus, analyse de marché et stratégie de croissance.' },
  { title: 'Études financières', description: 'Projections financières, analyses de rentabilité et simulations d\'investissement pour toutes tailles de projets.' },
  { title: 'Estimation de chantiers', description: 'Calcul précis des coûts, délais et ressources pour les projets de construction et d\'infrastructure.' },
  { title: 'Développement logiciel IA', description: 'Applications web et mobiles intégrant l\'IA : chatbots, moteurs de recommandation, OCR et analyse de documents.' },
  { title: 'Cybersécurité augmentée', description: 'Audit de sécurité automatisé, détection d\'anomalies et analyse des menaces par apprentissage automatique.' },
  { title: 'Transformation digitale', description: 'Diagnostic et feuille de route pour digitaliser vos processus métier — de l\'ERP aux workflows automatisés.' },
  { title: 'Cloud & Infrastructure IA', description: 'Architecture cloud native, migration et optimisation des coûts pour des systèmes AI-ready à grande échelle.' },
  { title: 'Automation des processus (RPA)', description: 'Automatisation des tâches répétitives par IA : saisie, reporting, tri, validation et extraction de données.' },
  { title: 'Rapports automatisés', description: 'Génération de rapports professionnels structurés et personnalisés en quelques secondes via notre assistant.' },
]

export default function AIPage() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [objective, setObjective] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const response = await postJson<{ result: string }>('/api/ai/analyze', { name, description, objective })
      setResult(response.result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'analyse')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Intelligence Artificielle"
        title="L'IA au service de vos décisions stratégiques"
        description="JuntoX AI n'est pas un gadget. C'est un assistant intégré capable d'analyser un projet, générer un business plan, estimer un chantier et produire des rapports professionnels en quelques secondes."
        badge="accent"
      >
        <Button href="#test-ai">Tester l&apos;IA</Button>
        <Button href="/contact" variant="secondary">En savoir plus</Button>
      </PageHero>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="accent">Capacités</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Ce que JuntoX AI peut faire
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* AI Test */}
      <section id="test-ai" className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="primary">Essayez maintenant</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Analysez un projet avec JuntoX AI
            </h2>
            <p className="mt-4 max-w-2xl text-body text-neutral-400">
              Soumettez un projet et obtenez une évaluation structurée en quelques secondes.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-5">
                <label className="block">
                  <span className="text-caption font-medium text-neutral-500">Nom du projet</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                    placeholder="Ex: Plateforme logistique pour Bunia"
                  />
                </label>
                <label className="block">
                  <span className="text-caption font-medium text-neutral-500">Description</span>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-accent/40 focus:ring-1 focus:ring-accent/20 resize-none"
                    placeholder="Décrivez votre projet en détail..."
                  />
                </label>
                <label className="block">
                  <span className="text-caption font-medium text-neutral-500">Objectif stratégique</span>
                  <textarea
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    required
                    rows={2}
                    className="mt-2 w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-accent/40 focus:ring-1 focus:ring-accent/20 resize-none"
                    placeholder="Quel est l'objectif principal ?"
                  />
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-light shadow-glow-accent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Analyse en cours...' : 'Analyser le projet'}
                </button>
                {error && <p className="text-sm text-red-400">{error}</p>}
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="card-base">
                <h3 className="font-serif text-heading-3 font-semibold text-white">
                  Comment ça marche
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="flex gap-4">
                    <span className="text-sm font-semibold text-accent">01</span>
                    <p className="text-sm text-neutral-400">Décrivez votre projet, son contexte et son objectif.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm font-semibold text-accent">02</span>
                    <p className="text-sm text-neutral-400">L&apos;IA analyse les forces, risques et opportunités.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm font-semibold text-accent">03</span>
                    <p className="text-sm text-neutral-400">Recevez un rapport structuré avec des recommandations.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {result && (
            <AnimatedSection className="mt-10">
              <div className="rounded-2xl border border-accent/20 bg-surface-elevated/60 p-8">
                <h3 className="font-serif text-heading-3 font-semibold text-white">Résultat de l&apos;analyse</h3>
                <pre className="mt-6 whitespace-pre-wrap rounded-xl border border-white/[0.06] bg-background/80 p-6 text-sm leading-7 text-neutral-300">
                  {result}
                </pre>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  )
}
