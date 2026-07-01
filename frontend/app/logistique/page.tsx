'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { CaseStudy } from '../../components/ui/CaseStudy'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const capabilities = [
  { title: 'Transport & Fret', description: 'Gestion de flotte, planification d\'itinéraires, transport routier, aérien et fluvial sur l\'ensemble du territoire et en Afrique centrale.' },
  { title: 'Transit & Dédouanement', description: 'Représentation en douane, gestion des formalités d\'importation/exportation, régimes suspensifs, TP et exonérations bailleurs.' },
  { title: 'Supply Chain Management', description: 'Optimisation complète de la chaîne d\'approvisionnement — de l\'achat fournisseur à la livraison finale — avec réduction des délais et coûts.' },
  { title: 'Gestion d\'entrepôts (3PL)', description: 'Stockage sécurisé, gestion de stocks WMS, préparation de commandes, emballage et traçabilité en temps réel.' },
  { title: 'Distribution & Last-mile', description: 'Solutions de distribution multi-points, livraison last-mile en zones urbaines et périurbaines, gestion des retours.' },
  { title: 'Chaîne du froid', description: 'Logistique réfrigérée pour produits agroalimentaires et pharmaceutiques — certifiée normes sanitaires internationales.' },
  { title: 'Plateforme digitale de tracking', description: 'Tableaux de bord temps réel pour suivre chaque expédition, chaque stock et chaque prestataire depuis une interface unique.' },
  { title: 'Conseil & Audit logistique', description: 'Diagnostic complet, cartographie des flux et plan d\'optimisation pour réduire vos coûts logistiques jusqu\'à 30%.' },
]

const sectors = [
  { name: 'Agro-industrie', detail: 'Chaîne du froid, stockage de denrées périssables, export certification' },
  { name: 'Commerce & Distribution', detail: 'Multi-points, gestion de la demande, e-commerce fulfillment' },
  { name: 'Construction & Mines', detail: 'Approvisionnement de chantiers, gestion de matériaux et équipements' },
  { name: 'Humanitaire & ONG', detail: 'Logistique de projets, gestion de kits et matériels de terrain' },
  { name: 'Santé & Pharmaceutique', detail: 'Chaîne du froid médicaments, distribution vaccins' },
  { name: 'Commerce international', detail: 'Transit, dédouanement, corridors régionaux' },
]

const process = [
  { step: 'Auditer', description: 'Cartographie complète de la chaîne logistique existante et identification des frictions.' },
  { step: 'Optimiser', description: 'Redesign des flux, négociation transporteurs et réduction des coûts cachés.' },
  { step: 'Digitaliser', description: 'Déploiement d\'outils de suivi en temps réel et d\'automatisation.' },
  { step: 'Scaler', description: 'Extension progressive à de nouveaux entrepôts, routes ou marchés.' },
]

const faqs = [
  {
    question: 'De combien réduisez-vous les coûts logistiques en moyenne ?',
    answer: 'Nos clients observent généralement une réduction de 15 à 30% des coûts logistiques après optimisation, selon l\'état initial de leur chaîne d\'approvisionnement.',
  },
  {
    question: 'Travaillez-vous avec des PME ou uniquement de grandes entreprises ?',
    answer: 'Les deux. Nous adaptons nos solutions à l\'échelle du client — d\'un audit ponctuel pour une PME à une plateforme complète pour un groupe multi-sites.',
  },
  {
    question: 'Votre plateforme s\'intègre-t-elle à nos systèmes existants ?',
    answer: 'Oui, notre architecture API-first permet une intégration avec la plupart des ERP, WMS et systèmes de gestion commerciale déjà en place.',
  },
  {
    question: 'Gérez-vous le dédouanement pour l\'import-export ?',
    answer: 'Oui, en partenariat avec des transitaires agréés, nous accompagnons nos clients dans toutes les démarches douanières en RDC et dans la sous-région.',
  },
]

export default function LogistiquePage() {
  return (
    <>
      <PageHero
        eyebrow="Logistique"
        title="Fluidifier les chaînes d'approvisionnement africaines"
        description="La logistique est le nerf de la guerre économique en Afrique. Nous développons des solutions intelligentes pour optimiser le transport, le stockage et la distribution à l'échelle continentale."
      >
        <Button href="/contact">Demander un audit</Button>
        <Button href="#capacites" variant="secondary">Nos capacités</Button>
      </PageHero>

      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 30, suffix: '%', label: 'Réduction coûts moyenne' },
            { target: 4, suffix: '', label: 'Secteurs servis' },
            { target: 24, suffix: '/7', label: 'Suivi temps réel' },
            { target: 15, suffix: '+', label: 'Partenaires transport' },
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

      <section id="capacites" className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="primary">Capacités</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Une cha&icirc;ne logistique ma&icirc;tris&eacute;e de bout en bout
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

      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="accent">Secteurs servis</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Des solutions adapt&eacute;es &agrave; chaque industrie
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector, i) => (
              <AnimatedSection key={sector.name} delay={i * 0.08}>
                <div className="card-base h-full text-center">
                  <h4 className="text-sm font-semibold text-white">{sector.name}</h4>
                  <p className="mt-2 text-sm text-neutral-500">{sector.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Méthodologie</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Notre approche en 4 étapes
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

      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Étude de cas</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Un audit en chiffres
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <CaseStudy
              tag="Distribution — Agro-industrie"
              title="Optimisation de la chaîne du froid pour un distributeur régional"
              description="Un distributeur de produits frais perdait 18% de sa marchandise en transit. Après audit et redesign de la chaîne logistique, incluant la renégociation de routes et l'introduction d'un suivi température en temps réel, les pertes ont chuté à 4%."
              metrics={[
                { value: '18% → 4%', label: 'Taux de pertes' },
                { value: '22%', label: 'Réduction coûts transport' },
                { value: '8 sem.', label: 'Durée du projet' },
              ]}
            />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

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
            Optimisez votre logistique
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Contactez-nous pour un audit gratuit de votre chaîne d&apos;approvisionnement.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Demander un audit</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
