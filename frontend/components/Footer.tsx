import Link from 'next/link'
import type { ReactNode } from 'react'
import { socialLinks } from '../lib/site-config'

const SOCIAL_ICONS: Record<string, ReactNode> = {
  Instagram: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.63 1.34 2.97 2.98 2.97 1.65 0 2.98-1.34 2.98-2.97C7.96 4.84 6.63 3.5 4.98 3.5zM2.4 21.5h5.16V8.75H2.4V21.5zM9.5 8.75h4.95v1.74h.07c.69-1.3 2.37-2.67 4.88-2.67 5.22 0 6.18 3.44 6.18 7.91v8.77h-5.16v-7.78c0-1.85-.03-4.24-2.58-4.24-2.58 0-2.98 2.02-2.98 4.1v7.92H9.5V8.75z" />
    </svg>
  ),
  TikTok: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16.5 2h-3.2v13.7a2.9 2.9 0 11-2.9-2.9c.2 0 .4 0 .6.05V9.6a6.1 6.1 0 00-.6-.03A6.13 6.13 0 104.7 15.7c0-3.39 2.74-6.13 6.13-6.13V6.4a6.07 6.07 0 003.9 1.43V4.6a3.46 3.46 0 01-1.7-2.6h3.47z" />
    </svg>
  ),
  Facebook: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.5 21v-7.7h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.27C15.86 4.18 14.92 4.1 13.8 4.1c-2.3 0-3.9 1.4-3.9 4v2.3H7.3v3h2.6V21h3.6z" />
    </svg>
  ),
  X: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.24 3H21l-6.34 7.24L22 21h-6.18l-4.84-6.32L5.4 21H2.6l6.78-7.74L2 3h6.34l4.38 5.78L18.24 3zm-1.08 16.2h1.7L7.92 4.7H6.1l11.06 14.5z" />
    </svg>
  ),
  YouTube: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12s0-3.2-.4-4.7a3 3 0 00-2.1-2.1C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.5.4A3 3 0 002.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7a3 3 0 002.1 2.1c1.6.4 7.5.4 7.5.4s5.9 0 7.5-.4a3 3 0 002.1-2.1c.4-1.5.4-4.7.4-4.7zM10 15.3V8.7l5.7 3.3-5.7 3.3z" />
    </svg>
  ),
  WhatsApp: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.6 14.3c-.24.66-1.4 1.27-1.93 1.34-.5.07-1.13.1-1.82-.12-.42-.13-.96-.31-1.66-.6-2.92-1.26-4.83-4.2-4.97-4.4-.15-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.27-.29.58-.36.78-.36h.55c.18 0 .42-.07.65.5.24.58.81 2 .88 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.07.18-.2.76-.88.96-1.18.2-.3.4-.25.67-.15.27.1 1.7.8 2 .95.3.15.5.22.57.34.07.13.07.74-.17 1.41z" />
    </svg>
  ),
}

const columns = [
  {
    title: 'Entreprise',
    links: [
      { href: '/about', label: 'À propos' },
      { href: '/vision', label: 'Notre Vision' },
      { href: '/carrieres', label: 'Carrières' },
      { href: '/partenaires', label: 'Partenaires' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/ai', label: 'Intelligence Artificielle' },
      { href: '/consultance', label: 'Consultance & Études' },
      { href: '/construction', label: 'Construction' },
      { href: '/logistique', label: 'Logistique' },
      { href: '/formation', label: 'Formation' },
      { href: '/investissements', label: 'Investissements' },
    ],
  },
  {
    title: 'Innovation',
    links: [
      { href: '/recherche', label: 'Recherche & Innovation' },
      { href: '/incubateur', label: 'Incubateur' },
      { href: '/laboratoire-ia', label: 'Laboratoire IA' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    title: 'Accès',
    links: [
      { href: '/investisseurs', label: 'Investisseurs' },
      { href: '/auth/login', label: 'Connexion' },
      { href: '/dashboard/admin', label: 'Dashboard' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-background">
      <div className="container-content px-6 sm:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1.5fr_2.5fr]">
          {/* Brand column */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-white">JX</span>
              </div>
              <span className="text-sm font-semibold tracking-[0.1em] text-white">JUNTOX</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-neutral-500">
              Transformer l&apos;intelligence humaine en impact économique durable. Plateforme
              technologique conçue pour bâtir les entreprises de demain, depuis l&apos;Afrique vers
              le monde.
            </p>
            <div className="mt-6 space-y-2 text-sm text-neutral-600">
              <p>contact@juntox.africa</p>
              <p>Bunia, Ituri, RD Congo</p>
            </div>
            {socialLinks().length > 0 && (
              <div className="mt-6 flex gap-2">
                {socialLinks().map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-neutral-500 transition hover:border-white/[0.16] hover:text-white"
                  >
                    {SOCIAL_ICONS[link.label]}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-500 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] py-6 text-xs text-neutral-600 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} JuntoX SARL. Tous droits réservés.</p>
          <p>Intelligence &middot; Ingénierie &middot; Capital</p>
        </div>
      </div>
    </footer>
  )
}
