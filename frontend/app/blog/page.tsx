'use client'

import { useState } from 'react'
import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'

const categories = ['Tous', 'Vision', 'Intelligence Artificielle', 'Philosophie', 'Logistique', 'Technologie', 'Investissements']

const featured = {
  title: 'Pourquoi l\'Afrique sera le prochain hub technologique mondial',
  excerpt: 'Une analyse des facteurs démographiques, économiques et technologiques qui positionnent l\'Afrique comme le prochain centre d\'innovation mondiale. Nous y détaillons notre thèse complète et les secteurs à plus fort potentiel pour la décennie à venir.',
  category: 'Vision',
  date: '15 juin 2026',
  readTime: '8 min',
}

const articles = [
  {
    title: 'L\'IA au service des entreprises africaines : état des lieux et perspectives',
    excerpt: 'Comment l\'intelligence artificielle transforme déjà les entreprises du continent et les opportunités à saisir dans les prochaines années.',
    category: 'Intelligence Artificielle',
    date: '8 juin 2026',
    readTime: '6 min',
  },
  {
    title: 'First Principles Thinking : comment nous concevons JuntoX',
    excerpt: 'Au lieu de copier les modèles existants, nous repartons des fondamentaux pour construire une entreprise véritablement différente.',
    category: 'Philosophie',
    date: '1er juin 2026',
    readTime: '5 min',
  },
  {
    title: 'Le défi logistique en RDC : problèmes et solutions',
    excerpt: 'Analyse des bottlenecks logistiques en République Démocratique du Congo et les solutions technologiques que nous développons.',
    category: 'Logistique',
    date: '25 mai 2026',
    readTime: '7 min',
  },
  {
    title: 'Construire pour 100 ans : notre approche de l\'architecture logicielle',
    excerpt: 'Les principes techniques et philosophiques qui guident nos choix architecturaux pour une plateforme durable.',
    category: 'Technologie',
    date: '18 mai 2026',
    readTime: '10 min',
  },
  {
    title: 'L\'impact investing en Afrique : au-delà du rendement financier',
    excerpt: 'Comment concilier performance financière et impact social mesurable dans le contexte africain.',
    category: 'Investissements',
    date: '10 mai 2026',
    readTime: '6 min',
  },
  {
    title: 'Golden Circle appliqué : pourquoi commencer par le Why change tout',
    excerpt: 'Retour d\'expérience sur l\'application du modèle de Simon Sinek à la construction de notre stratégie d\'entreprise.',
    category: 'Philosophie',
    date: '2 mai 2026',
    readTime: '5 min',
  },
]

export default function BlogPage() {
  const [filter, setFilter] = useState('Tous')
  const filtered = filter === 'Tous' ? articles : articles.filter((a) => a.category === filter)

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Idées, analyses et perspectives"
        description="Notre réflexion sur la technologie, l'innovation, l'investissement et l'avenir de l'Afrique. Des articles pour comprendre notre vision et les tendances qui façonnent le monde."
      />

      {/* Featured article */}
      <section className="section-padding pb-0">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="primary">Article à la une</Badge>
            <div className="mt-6 card-gradient-border">
              <div className="flex items-center gap-3">
                <Badge>{featured.category}</Badge>
                <span className="text-xs text-neutral-600">{featured.readTime} de lecture</span>
              </div>
              <h2 className="mt-5 font-serif text-heading-1 font-semibold text-white">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-body text-neutral-400">{featured.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-neutral-600">{featured.date}</span>
                <span className="text-sm font-medium text-primary-light">Lire l&apos;article &rarr;</span>
              </div>
            </div>
          </AnimatedSection>
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

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {filtered.map((article, i) => (
              <AnimatedSection key={article.title} delay={i * 0.08}>
                <article className="card-interactive group flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <Badge>{article.category}</Badge>
                    <span className="text-xs text-neutral-600">{article.readTime}</span>
                  </div>
                  <h3 className="mt-5 font-serif text-heading-3 font-semibold text-white group-hover:text-neutral-100">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-body text-neutral-400">{article.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-neutral-600">{article.date}</span>
                    <span className="text-sm text-neutral-600 transition group-hover:text-primary">
                      Lire &rarr;
                    </span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-neutral-500">Aucun article dans cette catégorie pour le moment.</p>
          )}
        </div>
      </section>

      <div className="divider" />

      {/* Newsletter */}
      <section className="section-padding">
        <AnimatedSection className="container-content">
          <div className="card-featured mx-auto max-w-2xl text-center">
            <Badge variant="gold">Newsletter</Badge>
            <h2 className="mt-5 font-serif text-heading-2 font-semibold text-white">
              Recevez nos analyses chaque mois
            </h2>
            <p className="mt-3 text-sm text-neutral-400">
              Une sélection de nos meilleurs articles, directement dans votre boîte mail.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="votre@email.com"
                className="flex-1 rounded-full border border-white/[0.08] bg-surface-elevated/60 px-5 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-light shadow-glow"
              >
                S&apos;abonner
              </button>
            </form>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
