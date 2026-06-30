export type PageEntry = {
  href: string
  label: string
  group: string
  keywords?: string
}

export const pagesIndex: PageEntry[] = [
  { href: '/', label: 'Accueil', group: 'Principal' },
  { href: '/about', label: 'À propos', group: 'Entreprise' },
  { href: '/vision', label: 'Notre Vision', group: 'Entreprise', keywords: 'mission valeurs futur' },
  { href: '/portfolio', label: 'Portfolio', group: 'Entreprise', keywords: 'projets réalisations' },
  { href: '/carrieres', label: 'Carrières', group: 'Entreprise', keywords: 'emploi recrutement job' },
  { href: '/contact', label: 'Contact', group: 'Entreprise' },
  { href: '/partenaires', label: 'Partenaires', group: 'Entreprise' },
  { href: '/investisseurs', label: 'Investisseurs', group: 'Entreprise', keywords: 'investir capital financement' },
  { href: '/blog', label: 'Blog', group: 'Entreprise', keywords: 'articles actualités' },

  { href: '/ai', label: 'Intelligence Artificielle', group: 'Services', keywords: 'ai ia assistant' },
  { href: '/consultance', label: 'Consultance & Études', group: 'Services', keywords: 'conseil stratégie' },
  { href: '/construction', label: 'Construction', group: 'Services', keywords: 'bâtiment infrastructure' },
  { href: '/logistique', label: 'Logistique', group: 'Services', keywords: 'transport supply chain' },
  { href: '/commerce', label: 'Commerce International', group: 'Services', keywords: 'import export trade' },
  { href: '/formation', label: 'Formation', group: 'Services', keywords: 'bootcamp éducation' },
  { href: '/investissements', label: 'Investissements', group: 'Services', keywords: 'capital fonds' },

  { href: '/recherche', label: 'Recherche & Innovation', group: 'Innovation', keywords: 'r&d' },
  { href: '/incubateur', label: 'Incubateur', group: 'Innovation', keywords: 'startup accélérateur' },
  { href: '/laboratoire-ia', label: 'Laboratoire IA', group: 'Innovation', keywords: 'lab machine learning' },

  { href: '/auth/login', label: 'Connexion', group: 'Accès' },
  { href: '/auth/register', label: 'Créer un compte', group: 'Accès', keywords: 'inscription signup' },
  { href: '/dashboard/admin', label: 'Tableau de bord', group: 'Accès', keywords: 'dashboard admin' },
]
