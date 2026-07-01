'use client'

import Link from 'next/link'
import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'

const poles = [
  {
    category: 'Technologies de l\'information',
    variant: 'primary' as const,
    description: 'Développement logiciel, IA, cybersécurité, cloud et transformation digitale.',
    items: [
      {
        title: 'Technologies & Intelligence Artificielle',
        description: 'Développement de logiciels, applications web et mobiles, IA, cybersécurité, cloud computing, automation RPA et transformation digitale.',
        href: '/ai',
      },
      {
        title: 'Ingénierie & Systèmes',
        description: 'Électronique, IoT, robotique, systèmes embarqués et automatisation industrielle pour moderniser vos processus de production.',
        href: '/ingenierie',
      },
    ],
  },
  {
    category: 'Conseil & Études',
    variant: 'accent' as const,
    description: 'Conseil stratégique, financier, informatique et gestion de projets.',
    items: [
      {
        title: 'Consultance & Études',
        description: 'Conseil stratégique, informatique et financier, études de faisabilité, baseline, M&E, gestion de projets et accompagnement institutionnel.',
        href: '/consultance',
      },
      {
        title: 'Recherche & Innovation',
        description: 'Études appliquées, cartographie des opportunités, prototypage rapide et publications de recherche sectorielles.',
        href: '/recherche',
      },
    ],
  },
  {
    category: 'Infrastructure & Industrie',
    variant: 'gold' as const,
    description: 'Construction, logistique, supply chain et distribution.',
    items: [
      {
        title: 'Construction & Génie Civil',
        description: 'Construction de bâtiments, génie civil, rénovation, promotion immobilière, fourniture de matériaux et supervision de chantiers.',
        href: '/construction',
      },
      {
        title: 'Logistique & Transport',
        description: 'Transport, transit, dédouanement, supply chain management, gestion d\'entrepôts et distribution multi-points.',
        href: '/logistique',
      },
    ],
  },
  {
    category: 'Commerce & Croissance',
    variant: 'primary' as const,
    description: 'Commerce, distribution, formation et développement humain.',
    items: [
      {
        title: 'Commerce & Distribution',
        description: 'Import-export, e-commerce, commerce général, distribution, sourcing international et accompagnement ZLECAf.',
        href: '/commerce',
      },
      {
        title: 'Formation',
        description: 'Formations professionnelles, leadership, IA, technologies, gestion, entrepreneuriat et plateforme e-learning JuntoX.',
        href: '/formation',
      },
    ],
  },
  {
    category: 'Communication & Influence',
    variant: 'accent' as const,
    description: 'Marketing digital, branding et production audiovisuelle.',
    items: [
      {
        title: 'Communication & Marketing',
        description: 'Marketing digital, branding, production audiovisuelle et communication institutionnelle pour les entreprises et institutions.',
        href: '/communication',
      },
    ],
  },
  {
    category: 'Investissement & Incubation',
    variant: 'gold' as const,
    description: 'Capital, incubation, accélération et gestion de projets innovants.',
    items: [
      {
        title: 'Investissement & Incubation',
        description: 'Capital-risque, incubation de startups, accélération, prise de participation et gestion de projets innovants.',
        href: '/investissements',
      },
      {
        title: 'Incubateur JuntoX',
        description: 'Programme d\'incubation 12 semaines : mentorat, ressources, réseau et accès au capital pour les projets à fort potentiel.',
        href: '/incubateur',
      },
    ],
  },
  {
    category: 'Secteurs Émergents',
    variant: 'primary' as const,
    description: 'Énergie, agriculture, santé, éducation et finance numérique.',
    items: [
      {
        title: 'Énergie Solaire & Renouvelables',
        description: 'Installations solaires, micro-grids hybrides, stockage d\'énergie et modèles Energy-as-a-Service pour les entreprises et institutions.',
        href: '/secteurs-emergents#energie',
      },
      {
        title: 'Agriculture Intelligente & Agro-industrie',
        description: 'Agriculture de précision, capteurs IoT, transformation agroalimentaire, traçabilité de filière et financement agricole.',
        href: '/secteurs-emergents#agriculture',
      },
      {
        title: 'Santé Numérique (eHealth)',
        description: 'Dossiers médicaux électroniques, télémédecine, systèmes de gestion hospitalière et collecte de données sanitaires.',
        href: '/secteurs-emergents#sante',
      },
      {
        title: 'Éducation Numérique (EdTech)',
        description: 'Plateformes d\'apprentissage en ligne, LMS adaptés à l\'Afrique, contenu adaptatif par IA et certification numérique.',
        href: '/secteurs-emergents#education',
      },
      {
        title: 'Finance Numérique (FinTech)',
        description: 'Paiements digitaux, Mobile Money, gestion financière PME, microfinance digitale et outils d\'analyse financière.',
        href: '/secteurs-emergents#fintech',
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos Services"
        title="Des expertises integrees, une seule mission"
        description="Chaque service que JuntoX propose est un outil au service d'une vision : accompagner la transformation de la RDC et de l'Afrique centrale. Technologie, ingenierie, conseil, construction, formation, communication et investissement — un ecosysteme pense pour agir a tous les niveaux."
      >
        <Button href="/contact">Discuter d&apos;un projet</Button>
        <Button href="/portfolio" variant="secondary">Voir nos réalisations</Button>
      </PageHero>

      {poles.map((pole, poleIndex) => (
        <div key={pole.category}>
          <section className="section-padding">
            <div className="container-content">
              <AnimatedSection>
                <Badge variant={pole.variant}>{pole.category}</Badge>
                <p className="mt-2 text-sm text-neutral-500">{pole.description}</p>
              </AnimatedSection>

              <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
                {pole.items.map((item, i) => (
                  <AnimatedSection key={item.title} delay={i * 0.08}>
                    <Link href={item.href} className="card-interactive group flex h-full flex-col">
                      <h3 className="font-serif text-heading-3 font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 flex-1 text-sm text-neutral-400">{item.description}</p>
                      <div className="mt-5 flex items-center gap-2 text-sm text-neutral-600 transition group-hover:text-primary">
                        Découvrir
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
          {poleIndex < poles.length - 1 && <div className="divider" />}
        </div>
      ))}

      <div className="divider" />

      <section className="section-padding">
        <AnimatedSection className="container-content text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Votre defi devient notre prochain projet
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Entreprise, ONG, institution publique ou investisseur — JuntoX construit des
            solutions qui combinent plusieurs expertises en reponse a des enjeux reels.
            Parlez-nous de votre contexte.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">Nous contacter</Button>
            <Button href="/ai" variant="secondary" size="lg">Tester JuntoX AI</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
