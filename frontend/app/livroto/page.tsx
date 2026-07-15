'use client'

import Link from 'next/link'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { PageHero } from '../../components/PageHero'

const LIVROTO_URL = 'https://livroto.up.railway.app'
const WHATSAPP_SELLER = 'https://wa.me/243988648433?text=Bonjour%20Livroto%20!%20Je%20veux%20ouvrir%20ma%20boutique.'

const features = [
  {
    title: 'Commande en ligne',
    description: 'Parcourez le catalogue, choisissez vos produits et passez commande en quelques secondes depuis votre téléphone ou ordinateur.',
  },
  {
    title: 'Livraison rapide',
    description: 'Un livreur récupère votre commande et vous l\'apporte directement. Suivi en temps réel via WhatsApp.',
  },
  {
    title: 'Cash à la porte',
    description: 'Payez à la réception — pas de carte bancaire requise. Conçu pour les réalités de Bunia.',
  },
  {
    title: 'Vendeurs locaux',
    description: 'Des boutiques de quartier, des commerces et des particuliers qui vendent leurs produits via la plateforme.',
  },
]

const zones = [
  { name: 'Centre-ville', fee: 2 },
  { name: 'Sayo', fee: 3 },
  { name: 'Lumumba', fee: 3 },
  { name: 'Bankoko', fee: 3 },
  { name: 'Mudzi Pela', fee: 5 },
  { name: 'Nyakasansa', fee: 5 },
  { name: 'Bigo', fee: 5 },
  { name: 'Sukisa', fee: 3 },
]

const steps = [
  { n: '01', title: 'Choisissez', desc: 'Parcourez le catalogue et ajoutez vos produits au panier.' },
  { n: '02', title: 'Commandez', desc: 'Confirmez votre commande avec votre adresse de livraison.' },
  { n: '03', title: 'On arrive', desc: 'Un livreur Livroto prend en charge votre commande.' },
  { n: '04', title: 'Payez', desc: 'Recevez votre commande et payez cash à la porte.' },
]

const stack = ['React', 'Vite', 'Supabase', 'FastAPI', 'Stripe', 'Capacitor (Android / iOS)', 'TanStack Router']

export default function LivrotoPage() {
  return (
    <>
      <PageHero
        eyebrow="Un produit JuntoX · En production"
        title="Bunia livre à ta porte"
        description="Livroto est la première marketplace locale de Bunia, Ituri. Commandez auprès de vendeurs du quartier et recevez vos produits à domicile — cash à la porte, sans carte bancaire."
        badge="accent"
      >
        <Button href={LIVROTO_URL} target="_blank" rel="noopener noreferrer">
          Ouvrir Livroto
        </Button>
        <Button href={WHATSAPP_SELLER} target="_blank" rel="noopener noreferrer" variant="secondary">
          Devenir vendeur
        </Button>
      </PageHero>

      {/* Quick stats */}
      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { value: '8', label: 'Quartiers couverts' },
            { value: '$2', label: 'Livraison dès' },
            { value: '4', label: 'Étapes pour commander' },
            { value: '100%', label: 'Cash — aucune carte' },
          ].map((s) => (
            <div key={s.label} className="px-6 py-10 text-center">
              <p className="font-serif text-heading-2 font-semibold text-amber-400">{s.value}</p>
              <p className="mt-2 text-caption text-neutral-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="accent">Pourquoi Livroto</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Simple. Local. Rapide.
            </h2>
            <p className="mt-4 max-w-xl text-body text-neutral-400">
              Livroto a été conçu à partir des réalités de Bunia — pas une copie de modèles importés.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.08}>
                <div className="card-base h-full">
                  <div className="mb-4 h-0.5 w-10 rounded-full bg-amber-400/60" />
                  <h3 className="text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400">{f.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* How it works */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Comment ça marche</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Commander en 4 étapes
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <AnimatedSection key={s.n} delay={i * 0.1}>
                <div className="card-base h-full">
                  <span className="font-serif text-display font-semibold text-white/[0.06]">{s.n}</span>
                  <h3 className="mt-2 text-base font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Zones */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="gold">Zones de livraison</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              On livre dans tout Bunia
            </h2>
            <p className="mt-4 max-w-lg text-body text-neutral-400">
              8 quartiers couverts. Tarifs indicatifs — le livreur confirme selon la distance et la charge.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {zones.map((z, i) => (
              <AnimatedSection key={z.name} delay={i * 0.05}>
                <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-surface-elevated/50 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <svg className="h-4 w-4 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="text-sm font-medium text-white">{z.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-amber-400">≈ ${z.fee}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Become a seller */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-400/[0.04] via-transparent to-transparent" />
        <div className="container-content relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <Badge variant="primary">Vendeurs</Badge>
              <h2 className="mt-6 font-serif text-heading-1 font-semibold text-white">
                Ouvrez votre boutique en ligne
              </h2>
              <p className="mt-5 text-body text-neutral-400">
                Vous vendez des accessoires, de la cuisine, des vêtements ou autre chose à Bunia ?
                Rejoignez Livroto et touchez des clients dans tous les quartiers — sans site web, sans carte bancaire.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  'Catalogue en ligne offert',
                  'Commandes reçues via WhatsApp',
                  'Livraison gérée par Livroto',
                  'Paiement cash sécurisé',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-neutral-300">
                    <svg className="h-4 w-4 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href={WHATSAPP_SELLER} target="_blank" rel="noopener noreferrer">
                  Rejoindre via WhatsApp
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} direction="right">
              <div className="rounded-2xl border border-amber-400/[0.15] bg-amber-400/[0.03] p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Stack technique</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stack.map((t) => (
                    <span key={t} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-400">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 space-y-3 text-sm text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    App web déployée sur Railway
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Base de données Supabase (PostgreSQL)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    App mobile Android / iOS — en préparation
                  </div>
                </div>
                <div className="mt-8 border-t border-white/[0.06] pt-6">
                  <p className="text-xs text-neutral-600">Un produit conçu et développé par</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
                      <span className="text-xs font-bold text-white">JX</span>
                    </div>
                    <span className="text-sm font-semibold tracking-widest text-white">JUNTOX</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Final CTA */}
      <section className="section-padding">
        <AnimatedSection className="container-content text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Prêt à commander ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Accédez à la marketplace et commandez auprès des vendeurs locaux de Bunia.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={LIVROTO_URL} target="_blank" rel="noopener noreferrer" size="lg">
              Ouvrir Livroto →
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Nous contacter
            </Button>
          </div>
          <p className="mt-6 text-xs text-neutral-600">
            Un produit <Link href="/" className="text-neutral-500 hover:text-white transition">JuntoX SARL</Link> · Bunia, Ituri, RDC
          </p>
        </AnimatedSection>
      </section>
    </>
  )
}
