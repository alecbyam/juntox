'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { ARTICLES, CATEGORIES, FEATURED_ARTICLE } from '../../lib/blog-data'

export default function BlogPage() {
  const [filter, setFilter] = useState('Tous')

  const filtered =
    filter === 'Tous' ? ARTICLES.filter((a) => !a.featured) : ARTICLES.filter((a) => a.category === filter)

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Idées, analyses et perspectives"
        description="Notre réflexion sur la technologie, l'innovation, l'investissement et l'avenir de l'Afrique. Des articles pour comprendre notre vision et les tendances qui façonnent le monde."
      />

      {/* ── Featured article ── */}
      <section className="section-padding pb-0">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="primary">Article à la une</Badge>
            <Link href={`/blog/${FEATURED_ARTICLE.slug}`} className="group mt-6 block card-gradient-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{FEATURED_ARTICLE.category}</Badge>
                <span className="flex items-center gap-1.5 text-xs text-neutral-600">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {FEATURED_ARTICLE.readTime} de lecture
                </span>
              </div>
              <h2 className="mt-5 font-serif text-heading-1 font-semibold text-white transition group-hover:text-neutral-100">
                {FEATURED_ARTICLE.title}
              </h2>
              <p className="mt-4 max-w-2xl text-body text-neutral-400">{FEATURED_ARTICLE.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    <span className="text-[10px] font-bold text-primary">JX</span>
                  </div>
                  <span className="text-sm text-neutral-600">{FEATURED_ARTICLE.date}</span>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-medium text-primary-light transition-all duration-300 group-hover:gap-2.5">
                  Lire l&apos;article
                  <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Articles grid ── */}
      <section className="section-padding">
        <div className="container-content">

          {/* Category filters */}
          <AnimatedSection className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
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
              <AnimatedSection key={article.slug} delay={i * 0.07}>
                <Link href={`/blog/${article.slug}`} className="card-interactive card-shine group flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <Badge>{article.category}</Badge>
                    <span className="text-xs text-neutral-600">{article.readTime}</span>
                  </div>
                  <h3 className="mt-5 font-serif text-heading-3 font-semibold text-white group-hover:text-neutral-100">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-body text-neutral-400">{article.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <time dateTime={article.dateISO} className="text-xs text-neutral-600">
                      {article.date}
                    </time>
                    <span className="flex items-center gap-1.5 text-sm text-neutral-600 transition-all duration-300 group-hover:gap-2.5 group-hover:text-primary">
                      Lire
                      <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-16 text-center">
              <p className="text-sm text-neutral-500">Aucun article dans cette catégorie pour le moment.</p>
              <button
                onClick={() => setFilter('Tous')}
                className="mt-4 text-sm text-primary-light transition hover:underline"
              >
                Voir tous les articles
              </button>
            </div>
          )}
        </div>
      </section>

      <div className="divider" />

      {/* ── Newsletter ── */}
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
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-light"
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
