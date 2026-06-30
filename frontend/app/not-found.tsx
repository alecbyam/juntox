'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GridPattern } from '../components/ui/GridPattern'
import { pagesIndex } from '../lib/pages-index'

function levenshtein(a: string, b: string) {
  const matrix = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)])
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      matrix[i][j] =
        a[i - 1] === b[j - 1]
          ? matrix[i - 1][j - 1]
          : 1 + Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1])
    }
  }
  return matrix[a.length][b.length]
}

export default function NotFound() {
  const pathname = usePathname()

  const suggestions = useMemo(() => {
    const slug = pathname.replace(/^\/|\/$/g, '').toLowerCase()
    if (!slug) return pagesIndex.slice(0, 3)
    return [...pagesIndex]
      .map((page) => ({
        page,
        distance: levenshtein(slug, page.href.replace(/^\/|\/$/g, '').toLowerCase()),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3)
      .map((entry) => entry.page)
  }, [pathname])

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center">
      <GridPattern className="opacity-20 mask-fade-b" />

      <div className="relative text-center px-6">
        <p className="font-serif text-[8rem] font-semibold leading-none text-white/[0.04] sm:text-[12rem]">
          404
        </p>
        <div className="-mt-16 sm:-mt-20">
          <h1 className="font-serif text-heading-1 font-semibold text-white">
            Page introuvable
          </h1>
          <p className="mt-4 text-body text-neutral-400">
            La page <span className="text-neutral-300">{pathname}</span> n&apos;existe pas ou a été déplacée.
          </p>

          {suggestions.length > 0 && (
            <div className="mx-auto mt-8 max-w-sm">
              <p className="text-caption font-medium uppercase tracking-[0.12em] text-neutral-600">
                Vouliez-vous dire
              </p>
              <div className="mt-3 space-y-2">
                {suggestions.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="block rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-neutral-300 transition hover:border-primary/30 hover:bg-primary/[0.04] hover:text-white"
                  >
                    {page.label}
                    <span className="ml-2 text-xs text-neutral-600">{page.href}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-light shadow-glow"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Nous contacter
            </Link>
          </div>

          <p className="mt-6 text-xs text-neutral-600">
            Astuce : appuyez sur <kbd className="rounded border border-white/[0.1] bg-white/[0.04] px-1.5 py-0.5 font-mono">⌘K</kbd> pour rechercher une page
          </p>
        </div>
      </div>
    </div>
  )
}
