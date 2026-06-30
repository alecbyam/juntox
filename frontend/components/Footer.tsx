import Link from 'next/link'

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
              <p>Kinshasa, RD Congo</p>
            </div>
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
