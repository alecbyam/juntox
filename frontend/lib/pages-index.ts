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

  { href: '/ai', label: 'Technologies & Intelligence Artificielle', group: 'Services', keywords: 'ai ia logiciel cybersecurite cloud transformation digitale' },
  { href: '/ingenierie', label: 'Ingénierie & Systèmes', group: 'Services', keywords: 'electronique iot robotique embarque automatisation industrielle' },
  { href: '/consultance', label: 'Consultance & Études', group: 'Services', keywords: 'conseil stratégie financier gestion projets AMO etudes faisabilite M&E' },
  { href: '/construction', label: 'Construction & Génie Civil', group: 'Services', keywords: 'bâtiment infrastructure genie civil renovation immobilier materiaux' },
  { href: '/logistique', label: 'Logistique & Transport', group: 'Services', keywords: 'transport transit dedouanement supply chain entrepot distribution' },
  { href: '/commerce', label: 'Commerce & Distribution', group: 'Services', keywords: 'import export ecommerce distribution sourcing trade' },
  { href: '/formation', label: 'Formation', group: 'Services', keywords: 'bootcamp elearning leadership gestion technologie' },
  { href: '/communication', label: 'Communication & Marketing', group: 'Services', keywords: 'marketing digital branding audiovisuel communication institutionnelle' },
  { href: '/investissements', label: 'Investissement & Incubation', group: 'Services', keywords: 'capital fonds incubation acceleration prise participation' },
  { href: '/secteurs-emergents', label: 'Secteurs Émergents', group: 'Services', keywords: 'energie solaire agriculture sante ehealth edtech fintech numerique' },

  { href: '/recherche', label: 'Recherche & Innovation', group: 'Innovation', keywords: 'r&d' },
  { href: '/incubateur', label: 'Incubateur', group: 'Innovation', keywords: 'startup accélérateur' },
  { href: '/laboratoire-ia', label: 'Laboratoire IA', group: 'Innovation', keywords: 'lab machine learning' },

  { href: '/auth/login', label: 'Connexion', group: 'Accès' },
  { href: '/auth/register', label: 'Créer un compte', group: 'Accès', keywords: 'inscription signup' },
  { href: '/dashboard/admin', label: 'Tableau de bord', group: 'Accès', keywords: 'dashboard admin' },
]
