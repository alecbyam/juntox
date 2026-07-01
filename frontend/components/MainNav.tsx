'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CommandPalette } from './CommandPalette'

const serviceGroups = [
  {
    heading: 'Technologies',
    items: [
      { href: '/ai', label: 'Technologies & IA' },
      { href: '/ingenierie', label: 'Ingénierie & Systèmes' },
      { href: '/communication', label: 'Communication & Marketing' },
    ],
  },
  {
    heading: 'Infrastructure',
    items: [
      { href: '/construction', label: 'Construction & Génie Civil' },
      { href: '/logistique', label: 'Logistique & Transport' },
      { href: '/commerce', label: 'Commerce & Distribution' },
    ],
  },
  {
    heading: 'Expertise',
    items: [
      { href: '/consultance', label: 'Consultance & Études' },
      { href: '/formation', label: 'Formation' },
      { href: '/investissements', label: 'Investissement' },
    ],
  },
  {
    heading: 'Secteurs émergents',
    items: [
      { href: '/secteurs-emergents', label: 'Énergie · Agri · Santé · EdTech · FinTech' },
    ],
  },
]

// Flat list for mobile menu
const services = serviceGroups.flatMap((g) => g.items)

const innovation = [
  { href: '/recherche', label: 'Recherche & Innovation' },
  { href: '/incubateur', label: 'Incubateur' },
  { href: '/laboratoire-ia', label: 'Laboratoire IA' },
]

const mainLinks = [
  { href: '/about', label: 'À propos' },
  { href: '/vision', label: 'Vision' },
  { href: '/blog', label: 'Blog' },
]

const secondaryLinks = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/carrieres', label: 'Carrières' },
  { href: '/contact', label: 'Contact' },
]

function GroupedDropdownMenu({
  label,
  groups,
  isOpen,
  onToggle,
}: {
  label: string
  groups: { heading: string; items: { href: string; label: string }[] }[]
  isOpen: boolean
  onToggle: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (isOpen) onToggle()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onToggle])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-1 py-2 text-sm text-neutral-500 transition hover:text-white"
      >
        {label}
        <svg
          className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 mt-3 w-[580px] overflow-hidden rounded-xl border border-white/[0.08] bg-surface-elevated p-4 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {groups.map((group) => (
                <div key={group.heading} className="mb-2">
                  <p className="px-2 pb-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-neutral-600">
                    {group.heading}
                  </p>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onToggle}
                      className="block rounded-lg px-2.5 py-2 text-sm text-neutral-400 transition hover:bg-white/[0.05] hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function DropdownMenu({
  label,
  items,
  isOpen,
  onToggle,
}: {
  label: string
  items: { href: string; label: string }[]
  isOpen: boolean
  onToggle: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (isOpen) onToggle()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onToggle])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-1 py-2 text-sm text-neutral-500 transition hover:text-white"
      >
        {label}
        <svg
          className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 mt-3 w-56 overflow-hidden rounded-xl border border-white/[0.08] bg-surface-elevated p-1.5 shadow-2xl"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onToggle}
                className="block rounded-lg px-3.5 py-2.5 text-sm text-neutral-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [innovationOpen, setInnovationOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setInnovationOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.04] bg-background/75 backdrop-blur-2xl saturate-[1.2]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex items-center justify-between px-6 py-4 sm:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-white">JX</span>
          </div>
          <span className="text-sm font-semibold tracking-[0.1em] text-white">JUNTOX</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`text-sm transition ${
                isActive(link.href) ? 'text-white' : 'text-neutral-500 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <GroupedDropdownMenu
            label="Services"
            groups={serviceGroups}
            isOpen={servicesOpen}
            onToggle={() => {
              setServicesOpen(!servicesOpen)
              setInnovationOpen(false)
            }}
          />

          <DropdownMenu
            label="Innovation"
            items={innovation}
            isOpen={innovationOpen}
            onToggle={() => {
              setInnovationOpen(!innovationOpen)
              setServicesOpen(false)
            }}
          />

          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`text-sm transition ${
                isActive(link.href) ? 'text-white' : 'text-neutral-500 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <CommandPalette />
          <Link
            href="/auth/login"
            className="rounded-full px-4 py-2 text-sm text-neutral-500 transition hover:text-white"
          >
            Connexion
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-white/[0.06] px-5 py-2 text-sm font-medium text-white border border-white/[0.1] transition hover:bg-white/[0.1] hover:border-white/[0.16]"
          >
            Nous contacter
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-lg lg:hidden"
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px w-full bg-white transition-all ${
                mobileOpen ? 'translate-y-[3.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-full bg-white transition-all ${
                mobileOpen ? '-translate-y-[3.5px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu"
            className="overflow-hidden border-t border-white/[0.06] bg-background/95 backdrop-blur-xl lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto"
          >
            <div className="container-content space-y-1 px-6 py-6 sm:px-8">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-sm text-neutral-400 transition hover:bg-white/[0.04] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <div className="py-2">
                <p className="px-4 text-xs font-medium uppercase tracking-[0.14em] text-neutral-600">
                  Services
                </p>
                {services.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-4 py-2.5 text-sm text-neutral-500 transition hover:bg-white/[0.04] hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="py-2">
                <p className="px-4 text-xs font-medium uppercase tracking-[0.14em] text-neutral-600">
                  Innovation
                </p>
                {innovation.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-4 py-2.5 text-sm text-neutral-500 transition hover:bg-white/[0.04] hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-sm text-neutral-400 transition hover:bg-white/[0.04] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <div className="divider my-4" />

              <div className="flex gap-3 px-4 pb-2">
                <Link
                  href="/auth/login"
                  className="flex-1 rounded-full border border-white/[0.1] bg-white/[0.04] py-3 text-center text-sm text-white transition hover:bg-white/[0.08]"
                >
                  Connexion
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 rounded-full bg-primary py-3 text-center text-sm font-medium text-white transition hover:bg-primary-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
