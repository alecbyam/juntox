'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { pagesIndex } from '../lib/pages-index'

const ACCENT_MAP: Record<string, string> = {
  'à': 'a', 'â': 'a', 'ä': 'a', 'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
  'î': 'i', 'ï': 'i', 'ô': 'o', 'ö': 'o', 'ù': 'u', 'û': 'u', 'ü': 'u', 'ç': 'c',
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .split('')
    .map((c) => ACCENT_MAP[c] ?? c)
    .join('')
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const results = useMemo(() => {
    const q = normalize(query.trim())
    if (!q) return pagesIndex
    return pagesIndex.filter((p) => {
      const haystack = normalize(`${p.label} ${p.group} ${p.keywords ?? ''}`)
      return haystack.includes(q)
    })
  }, [query])

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActiveIndex(0)
  }, [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const isMod = e.metaKey || e.ctrlKey
      if (isMod && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      } else if (e.key === 'Escape' && open) {
        close()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, close])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => inputRef.current?.focus())
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  function navigate(href: string) {
    router.push(href)
    close()
  }

  function onKeyDownList(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const target = results[activeIndex]
      if (target) navigate(target.href)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Ouvrir la recherche rapide"
        className="hidden items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-2 text-xs text-neutral-500 transition hover:border-white/[0.14] hover:text-neutral-300 lg:flex"
      >
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        Rechercher
        <kbd className="ml-2 rounded border border-white/[0.1] bg-white/[0.04] px-1.5 py-0.5 font-mono text-[0.65rem] text-neutral-500">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={close}
              className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
              role="dialog"
              aria-modal="true"
              aria-label="Recherche rapide"
              className="fixed left-1/2 top-[12vh] z-[101] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2"
            >
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-elevated shadow-elevated">
                <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
                  <svg className="h-4 w-4 shrink-0 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={onKeyDownList}
                    placeholder="Rechercher une page..."
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-600"
                  />
                  <kbd className="shrink-0 rounded border border-white/[0.1] bg-white/[0.04] px-1.5 py-0.5 font-mono text-[0.65rem] text-neutral-500">
                    ESC
                  </kbd>
                </div>

                <div className="max-h-[50vh] overflow-y-auto p-2">
                  {results.length === 0 ? (
                    <p className="px-3 py-8 text-center text-sm text-neutral-500">
                      Aucune page ne correspond à &laquo;&nbsp;{query}&nbsp;&raquo;
                    </p>
                  ) : (
                    results.map((page, i) => (
                      <button
                        key={page.href}
                        onClick={() => navigate(page.href)}
                        onMouseEnter={() => setActiveIndex(i)}
                        className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${
                          i === activeIndex ? 'bg-primary/10 text-white' : 'text-neutral-400'
                        }`}
                      >
                        <span>{page.label}</span>
                        <span className="text-xs text-neutral-600">{page.group}</span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
