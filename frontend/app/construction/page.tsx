'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { CaseStudy } from '../../components/ui/CaseStudy'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const specializations = [
  { title: 'Résidentiel', description: 'Villas, complexes résidentiels et lotissements conçus pour durer et s\'adapter aux modes de vie locaux.' },
  { title: 'Commercial & Tertiaire', description: 'Bureaux, centres commerciaux, hôtels et espaces mixtes à haute valeur d\'usage et de représentation.' },
  { title: 'Génie Civil', description: 'Routes, ponts, barrages, réseaux hydrauliques et ouvrages d\'art au service des territoires et des populations.' },
  { title: 'Industriel', description: 'Entrepôts, usines, unités de transformation agroalimentaire et infrastructures logistiques optimisées.' },
  { title: 'Rénovation & Réhabilitation', description: 'Modernisation d\'immeubles anciens, mise aux normes, amélioration énergétique et extension de bâtiments existants.' },
  { title: 'Promotion Immobilière', description: 'Développement de programmes immobiliers résidentiels et commerciaux — de la maîtrise foncière à la commercialisation.' },
]

const capabilities = [
  { title: 'Maîtrise d\'ouvrage déléguée', description: 'Assistance à maîtrise d\'ouvrage (AMO) pour les clients qui n\'ont pas de direction technique interne.' },
  { title: 'Conception architecturale', description: 'Design fonctionnel et esthétique adapté aux contraintes climatiques, culturelles et réglementaires locales.' },
  { title: 'Estimation IA', description: 'Notre moteur d\'estimation calcule les coûts avec une marge d\'erreur inférieure à 8%, contre 20-30% pour les méthodes traditionnelles.' },
  { title: 'Supervision de chantiers', description: 'Contrôle qualité hebdomadaire, suivi des délais, coordination des corps de métier et gestion proactive des imprévus.' },
  { title: 'Fourniture de matériaux', description: 'Approvisionnement en matériaux de construction : ciment, fer, bois, toiture, sanitaires — sourcing local et international.' },
  { title: 'Smart buildings', description: 'Intégration de capteurs IoT, gestion énergétique intelligente et systèmes de sécurité connectés dans les nouvelles constructions.' },
  { title: 'Études de faisabilité', description: 'Analyse technique, environnementale et financière avant tout engagement budgétaire — études de sol, environnement, permis.' },
  { title: 'Gestion des risques chantier', description: 'Identification proactive des risques techniques, juridiques et environnementaux avec plans de mitigation.' },
]

const process = [
  { step: 'Étude', description: 'Visite terrain, analyse du sol, faisabilité technique et réglementaire.' },
  { step: 'Conception', description: 'Plans architecturaux validés, chiffrage détaillé et planning prévisionnel.' },
  { step: 'Exécution', description: 'Construction supervisée avec rapports hebdomadaires et contrôle qualité continu.' },
  { step: 'Livraison', description: 'Réception contradictoire, documentation technique et garanties contractuelles.' },
]

const faqs = [
  {
    question: 'Quel est le délai moyen pour un projet résidentiel ?',
    answer: 'Pour une villa standard, comptez 6 à 9 mois entre la validation des plans et la livraison. Les projets commerciaux ou industriels prennent généralement 12 à 18 mois selon la complexité.',
  },
  {
    question: 'Comment l\'IA améliore-t-elle l\'estimation des coûts ?',
    answer: 'Notre modèle est entraîné sur des centaines de projets régionaux et intègre les prix des matériaux en temps réel, la main-d\'œuvre locale et les spécificités du terrain — réduisant les dépassements budgétaires de manière significative.',
  },
  {
    question: 'Proposez-vous un suivi à distance pour les investisseurs ?',
    answer: 'Oui, chaque client a accès à un tableau de bord avec photos, rapports d\'avancement et jalons financiers, mis à jour chaque semaine.',
  },
  {
    question: 'Travaillez-vous avec des architectes externes ?',
    answer: 'Absolument. Nous collaborons avec des cabinets d\'architecture partenaires ou pouvons intégrer vos plans existants dans notre processus de gestion de projet.',
  },
]

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Construction"
        title="Des infrastructures pensées pour durer des générations"
        description="Du bâtiment résidentiel aux projets industriels, nous concevons, gérons et supervisons des infrastructures robustes, connectées et estimées avec une précision inédite grâce à l'intelligence artificielle."
      >
        <Button href="/contact">Demander une estimation</Button>
        <Button href="#specialites" variant="secondary">Nos spécialités</Button>
      </PageHero>

      {/* Stats */}
      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 18, suffix: '', label: 'Chantiers livrés' },
            { target: 8, suffix: '%', label: 'Marge d\'erreur estimation' },
            { target: 4, suffix: '', label: 'Spécialités couvertes' },
            { target: 100, suffix: '%', label: 'Suivi digital' },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-10 text-center">
              <p className="font-serif text-heading-2 font-semibold text-white">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-caption text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specializations */}
      <section id="specialites" className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="primary">Spécialités</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Quatre domaines de construction
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specializations.map((spec, i) => (
              <AnimatedSection key={spec.title} delay={i * 0.08}>
                <div className="card-base h-full text-center">
                  <h3 className="text-base font-semibold text-white">{spec.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400">{spec.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="accent">Capacités</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Ce que nous ma&icirc;trisons
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.08}>
                <div className="card-base h-full">
                  <h3 className="text-base font-semibold text-white">{cap.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400">{cap.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Process */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Méthodologie</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              De l&apos;étude à la livraison
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="card-base h-full">
                  <span className="text-heading-2 font-serif font-semibold text-white/[0.06]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="mt-3 text-sm font-semibold text-white">{step.step}</h4>
                  <p className="mt-2 text-sm text-neutral-500">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Case study */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Étude de cas</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Un projet en chiffres
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <CaseStudy
              tag="Infrastructure logistique — Terminal 3"
              title="Estimation et supervision d'un terminal de fret de 4 200 m²"
              description="Mandatés pour estimer et superviser la construction d'un nouveau terminal logistique, nous avons livré une estimation précise à 6% près du coût final, avec un chantier achevé dans les délais malgré la saison des pluies."
              metrics={[
                { value: '4 200 m²', label: 'Surface construite' },
                { value: '6%', label: 'Écart estimation/réel' },
                { value: '11 mois', label: 'Délai de livraison' },
              ]}
            />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection className="max-w-2xl">
            <Badge>Questions fréquentes</Badge>
            <h2 className="mt-6 font-serif text-heading-1 font-semibold text-white">
              Ce que nos clients demandent
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding relative overflow-hidden">
        <AnimatedSection className="container-content relative text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Un projet de construction en vue ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Obtenez une estimation gratuite et un plan de projet personnalisé sous 5 jours.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Demander une estimation</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
