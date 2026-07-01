'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { CaseStudy } from '../../components/ui/CaseStudy'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const capabilities = [
  { title: 'Import-Export', description: 'Gestion complète des opérations commerciales, de la négociation fournisseur à la livraison finale — Asie, Europe, Afrique.' },
  { title: 'E-commerce & Vente en ligne', description: 'Création et gestion de boutiques en ligne, marketplaces B2B et B2C, paiements mobiles et intégration logistique last-mile.' },
  { title: 'Commerce général & Distribution', description: 'Approvisionnement, stockage et distribution de biens de consommation, matériaux et équipements sur le marché local et régional.' },
  { title: 'Sourcing international', description: 'Identification et qualification de fournisseurs fiables en Asie, Europe et Moyen-Orient — due diligence et contrats.' },
  { title: 'Conformité & Dédouanement', description: 'Navigation experte dans les réglementations douanières congolaises et régionales — transit, TP, exonérations et régimes suspensifs.' },
  { title: 'Trade finance', description: 'Lettres de crédit, garanties bancaires, affacturage et solutions de financement du commerce international et local.' },
  { title: 'Études de marché export', description: 'Identification des marchés porteurs pour les produits et matières premières africaines. Accompagnement ZLECAf.' },
  { title: 'Commerce de matières premières', description: 'Négoce de produits agricoles, minéraux et ressources naturelles — conformité EDD, traçabilité et certification export.' },
]

const corridors = [
  { region: 'Asie de l\'Est', focus: 'Électronique, machines, textiles' },
  { region: 'Europe', focus: 'Équipements industriels, pièces détachées' },
  { region: 'Afrique australe', focus: 'Minerais, produits manufacturés' },
  { region: 'Moyen-Orient', focus: 'Matériaux de construction, véhicules' },
]

const process = [
  { step: 'Évaluer', description: 'Analyse du potentiel commercial, des marchés cibles et de la réglementation applicable.' },
  { step: 'Structurer', description: 'Mise en place des contrats, financements et partenaires logistiques.' },
  { step: 'Exécuter', description: 'Gestion opérationnelle des flux commerciaux de bout en bout.' },
  { step: 'Développer', description: 'Expansion progressive vers de nouveaux marchés et partenaires.' },
]

const faqs = [
  {
    question: 'Quels types de marchandises gérez-vous ?',
    answer: 'Nous accompagnons l\'import-export de biens d\'équipement, matériaux de construction, électronique, véhicules et matières premières. Chaque dossier est évalué selon sa faisabilité réglementaire et logistique.',
  },
  {
    question: 'Comment fonctionne la ZLECAf pour mon entreprise ?',
    answer: 'La Zone de Libre-Échange Continentale Africaine réduit les droits de douane entre pays membres. Nous évaluons votre éligibilité et structurons vos échanges pour maximiser ces avantages tarifaires.',
  },
  {
    question: 'Proposez-vous des solutions de financement ?',
    answer: 'Oui, via notre réseau de partenaires bancaires, nous facilitons l\'accès aux lettres de crédit et garanties nécessaires pour sécuriser vos transactions internationales.',
  },
  {
    question: 'Quel est le délai moyen pour une opération d\'import ?',
    answer: 'Entre 4 et 10 semaines selon l\'origine, le mode de transport et la complexité douanière. Nous fournissons un calendrier précis dès la phase de structuration.',
  },
]

export default function CommercePage() {
  return (
    <>
      <PageHero
        eyebrow="Commerce International"
        title="Connecter l'Afrique au commerce mondial"
        description="Nous facilitons les échanges commerciaux entre l'Afrique et le reste du monde en simplifiant l'import-export, le sourcing et la conformité réglementaire."
      >
        <Button href="/contact">Démarrer un projet</Button>
        <Button href="#capacites" variant="secondary">Nos capacités</Button>
      </PageHero>

      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 4, suffix: '', label: 'Corridors commerciaux' },
            { target: 25, suffix: '+', label: 'Opérations réalisées' },
            { target: 6, suffix: '', label: 'Pays partenaires' },
            { target: 10, suffix: ' sem.', label: 'Délai moyen' },
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
              Du sourcing &agrave; la livraison
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
            <Badge variant="accent">Corridors commerciaux</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Nos routes commerciales actives
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {corridors.map((corridor, i) => (
              <AnimatedSection key={corridor.region} delay={i * 0.08}>
                <div className="card-base h-full text-center">
                  <h4 className="text-sm font-semibold text-white">{corridor.region}</h4>
                  <p className="mt-2 text-sm text-neutral-500">{corridor.focus}</p>
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
              Une opération en chiffres
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <CaseStudy
              tag="Import — Équipements industriels"
              title="Sourcing et import d'une ligne de production depuis l'Asie de l'Est"
              description="Un industriel congolais avait besoin d'importer une ligne de production complète. Nous avons géré le sourcing, la négociation, le financement par lettre de crédit et le dédouanement, livrant l'équipement avec deux semaines d'avance sur le calendrier initial."
              metrics={[
                { value: '7 sem.', label: 'Délai total' },
                { value: '12%', label: 'Économie vs devis initial' },
                { value: '0', label: 'Litige douanier' },
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
            D&eacute;veloppez votre commerce international
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Explorons ensemble les opportunit&eacute;s commerciales les plus porteuses pour votre entreprise.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Démarrer un projet</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
