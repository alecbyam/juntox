import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ARTICLES } from '../../../lib/blog-data'
import { Badge } from '../../../components/ui/Badge'
import { createMetadata } from '../../../lib/metadata'
import { ReadingProgress } from './ReadingProgress'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = ARTICLES.find((a) => a.slug === slug)
  if (!article) return {}
  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
  })
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = ARTICLES.find((a) => a.slug === slug)
  if (!article) notFound()

  const related = ARTICLES.filter(
    (a) => a.slug !== slug && a.category === article.category,
  ).slice(0, 2)
  const relatedArticles =
    related.length >= 2
      ? related
      : [...related, ...ARTICLES.filter((a) => a.slug !== slug && !related.includes(a))].slice(0, 2)

  return (
    <>
      <ReadingProgress />

      {/* ── Breadcrumb ── */}
      <div className="border-b border-white/[0.04] bg-surface/40">
        <div className="container-content px-6 py-4 sm:px-8">
          <nav className="flex items-center gap-2 text-sm" aria-label="Fil d'Ariane">
            <Link href="/" className="text-neutral-600 transition hover:text-white">JuntoX</Link>
            <span className="text-neutral-700">/</span>
            <Link href="/blog" className="text-neutral-600 transition hover:text-white">Blog</Link>
            <span className="text-neutral-700">/</span>
            <span className="text-neutral-400 line-clamp-1">{article.category}</span>
          </nav>
        </div>
      </div>

      {/* ── Article header ── */}
      <header className="relative overflow-hidden border-b border-white/[0.04] pb-16 pt-14 sm:pb-20 sm:pt-16 md:pb-24 md:pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div
            className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.03]"
            style={{ background: 'radial-gradient(circle, #b91c1c 0%, transparent 70%)' }}
          />
        </div>

        <div className="container-content relative px-6 sm:px-8">
          <div className="mx-auto max-w-[72ch]">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{article.category}</Badge>
              <span className="flex items-center gap-1.5 text-xs text-neutral-600">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readTime} de lecture
              </span>
            </div>

            <h1 className="mt-6 font-serif text-display font-semibold leading-[1.1] text-white md:text-display-xl md:leading-[1.05]">
              {article.title}
            </h1>

            <p className="mt-5 text-body-lg leading-relaxed text-neutral-400">
              {article.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 bg-primary/10">
                  <span className="text-xs font-bold text-primary">JX</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{article.author.name}</p>
                  <p className="text-xs text-neutral-600">{article.author.role}</p>
                </div>
              </div>
              <span className="h-4 w-px bg-white/[0.1]" aria-hidden="true" />
              <time dateTime={article.dateISO} className="text-sm text-neutral-500">
                {article.date}
              </time>
            </div>
          </div>
        </div>
      </header>

      {/* ── Article body ── */}
      <article className="py-16 sm:py-20">
        <div className="container-content px-6 sm:px-8">
          <div className="mx-auto max-w-[68ch]">

            {/* Intro section (no heading) */}
            {article.sections[0]?.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`leading-[1.85] text-neutral-300 ${
                  i === 0 ? 'mb-7 text-body-lg font-[425]' : 'mb-5 text-body'
                }`}
              >
                {p}
              </p>
            ))}

            {/* Remaining sections */}
            {article.sections.slice(1).map((section, si) => (
              <section key={si} className="mt-12">
                {section.heading && (
                  <h2 className="relative mb-5 pl-4 font-serif text-heading-2 font-semibold text-white before:absolute before:left-0 before:top-[0.2em] before:h-[0.8em] before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-primary before:to-primary/30">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, pi) => (
                  <p key={pi} className="mb-5 text-body leading-[1.85] text-neutral-400">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-14 flex flex-wrap gap-2 border-t border-white/[0.06] pt-8">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1 text-xs text-neutral-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share */}
            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-xl border border-white/[0.06] bg-surface-elevated/40 px-5 py-4">
              <span className="text-sm text-neutral-500">Partager :</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent('https://juntox.africa/blog/' + article.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-400 transition hover:border-white/[0.15] hover:text-white"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X / Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://juntox.africa/blog/' + article.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-400 transition hover:border-white/[0.15] hover:text-white"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <Link
                href="/blog"
                className="ml-auto flex items-center gap-2 text-xs text-neutral-600 transition hover:text-white"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Retour au blog
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* ── Related articles ── */}
      {relatedArticles.length > 0 && (
        <>
          <div className="divider" />
          <section className="py-16 sm:py-20" aria-labelledby="related-heading">
            <div className="container-content px-6 sm:px-8">
              <h2 id="related-heading" className="mb-10 font-serif text-heading-2 font-semibold text-white">
                Articles connexes
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedArticles.map((a) => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} className="card-interactive card-shine group flex flex-col">
                    <div className="flex items-center gap-3">
                      <Badge>{a.category}</Badge>
                      <span className="text-xs text-neutral-600">{a.readTime}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-heading-3 font-semibold text-white group-hover:text-neutral-100">
                      {a.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">{a.excerpt}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-sm text-neutral-600 transition-all duration-300 group-hover:gap-2.5 group-hover:text-primary">
                      Lire l&apos;article
                      <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── Newsletter CTA ── */}
      <div className="divider" />
      <section className="py-16 sm:py-20">
        <div className="container-content px-6 sm:px-8">
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
        </div>
      </section>
    </>
  )
}
