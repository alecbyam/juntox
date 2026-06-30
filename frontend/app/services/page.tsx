'use client'

import Link from 'next/link'
import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'

const services = [
  {
    category: 'Technologie',
    items: [
      {
        title: 'Intelligence Artificielle',
        description: 'Solutions IA sur mesure pour automatiser la stratégie, l\'analyse et la prise de décision. Modèles prédictifs, assistants intelligents et automatisation.',
        href: '/ai',
      },
      {
        title: 'Développement de plateformes',
        description: 'Conception et développement de systèmes numériques : ERP, CRM, tableaux de bord, API et applications métier.',
        href: '/services',
      },
    ],
  },
  {
    category: 'Conseil',
    items: [
      {
        title: 'Consultance & Études',
        description: 'Études stratégiques, analyses de marché, due diligence, évaluations d\'entreprises et accompagnement décisionnel.',
        href: '/consultance',
      },
      {
        title: 'Recherche & Innovation',
        description: 'Cartographie d\'opportunités, veille technologique, prototypage rapide et publication de recherche appliquée.',
        href: '/recherche',
      },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      {
        title: 'Construction',
        description: 'Conception, gestion et supervision de projets de construction — du bâtiment résidentiel aux infrastructures industrielles.',
        href: '/construction',
      },
      {
        title: 'Logistique',
        description: 'Optimisation des chaînes d\'approvisionnement, gestion d\'entrepôts, transport et solutions last-mile.',
        href: '/logistique',
      },
    ],
  },
  {
    category: 'Croissance',
    items: [
      {
        title: 'Commerce International',
        description: 'Facilitation des échanges commerciaux entre l\'Afrique et le reste du monde. Import-export, sourcing et conformité.',
        href: '/commerce',
      },
      {
        title: 'Formation',
        description: 'Programmes de formation en leadership technologique, entrepreneuriat, IA appliquée et gestion de projets.',
        href: '/formation',
      },
      {
        title: 'Investissements',
        description: 'Mobilisation de capital, structuration financière et accompagnement d\'entreprises à fort potentiel de croissance.',
        href: '/investissements',
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos Services"
        title="Une offre complète pour l'entreprise intelligente"
        description="Nous accompagnons les organisations avec des services intégrés qui couvrent l'ensemble du cycle : stratégie, innovation, exécution et capital. Chaque service est conçu comme un module de notre plateforme."
      >
        <Button href="/contact">Discuter d&apos;un projet</Button>
        <Button href="/portfolio" variant="secondary">Voir nos réalisations</Button>
      </PageHero>

      {services.map((section, sectionIndex) => (
        <div key={section.category}>
          <section className="section-padding">
            <div className="container-content">
              <AnimatedSection>
                <Badge variant={sectionIndex % 2 === 0 ? 'primary' : 'accent'}>
                  {section.category}
                </Badge>
              </AnimatedSection>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {section.items.map((item, i) => (
                  <AnimatedSection key={item.title} delay={i * 0.1}>
                    <Link href={item.href} className="card-interactive group flex h-full flex-col">
                      <h3 className="font-serif text-heading-3 font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 flex-1 text-body text-neutral-400">{item.description}</p>
                      <div className="mt-6 flex items-center gap-2 text-sm text-neutral-600 transition group-hover:text-primary">
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
          {sectionIndex < services.length - 1 && <div className="divider" />}
        </div>
      ))}

      <div className="divider" />

      {/* CTA */}
      <section className="section-padding">
        <AnimatedSection className="container-content text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Un besoin spécifique ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Parlez-nous de votre projet. Nous construisons des solutions sur mesure adaptées à vos enjeux.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Nous contacter</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
