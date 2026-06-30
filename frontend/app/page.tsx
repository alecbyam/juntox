'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { GridPattern, DotPattern } from '../components/ui/GridPattern'
import { GlowOrb } from '../components/ui/GlowOrb'

/* ─── Data ─── */

const stats = [
  { target: 8, suffix: '', label: 'Secteurs d’activité' },
  { target: 24, suffix: '', label: 'Projets en cours' },
  { target: 6, suffix: '', label: 'Pays ciblés' },
  { target: 100, suffix: '+', label: 'Années de vision' },
]

const goldenCircle = [
  {
    tag: 'WHY',
    title: 'Pourquoi nous existons',
    description:
      'Nous croyons que les connaissances doivent devenir des infrastructures. Que les idées doivent devenir des entreprises. Que l’Afrique peut produire les prochaines entreprises technologiques mondiales.',
    color: 'text-primary',
    border: 'border-primary/20',
  },
  {
    tag: 'HOW',
    title: 'Comment nous agissons',
    description:
      'En combinant intelligence artificielle, logiciels, construction, logistique, conseil, investissement, recherche et formation pour résoudre des problèmes réels à grande échelle.',
    color: 'text-accent-light',
    border: 'border-accent/20',
  },
  {
    tag: 'WHAT',
    title: 'Ce que nous construisons',
    description:
      'Des plateformes IA, des systèmes de gestion, des infrastructures, des solutions logistiques, des investissements et des programmes de formation qui transforment les territoires.',
    color: 'text-white',
    border: 'border-white/[0.1]',
  },
]

const serviceCards = [
  {
    title: 'Intelligence Artificielle',
    description: 'Automatiser la stratégie, l’analyse et la prise de décision grâce à des solutions IA sur mesure.',
    href: '/ai',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    title: 'Consultance & Études',
    description: 'Études stratégiques, analyses de marché et accompagnement décisionnel pour des projets à fort impact.',
    href: '/consultance',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: 'Construction',
    description: 'Conception et déploiement d’infrastructures robustes, connectées et répétables.',
    href: '/construction',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Logistique',
    description: 'Optimisation des chaînes d’approvisionnement et solutions de transport continentales.',
    href: '/logistique',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-2.25h3.75m-3.75 0h-3.375c-.621 0-1.125.504-1.125 1.125V14.25m1.5 0V5.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v8.625m-7.5 0h7.5" />
      </svg>
    ),
  },
  {
    title: 'Commerce International',
    description: 'Faciliter les échanges commerciaux entre l’Afrique et le reste du monde.',
    href: '/commerce',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Formation',
    description: 'Former la prochaine génération de leaders technologiques et d’entrepreneurs africains.',
    href: '/formation',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Investissements',
    description: 'Mobiliser du capital et financer des entreprises à fort potentiel de croissance.',
    href: '/investissements',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Recherche & Innovation',
    description: 'Cartographier les opportunités, inventer les modèles et accélérer l’impact.',
    href: '/recherche',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
]

const ecosystemFeatures = [
  { title: 'API & Intégrations', description: 'Architecture ouverte pour connecter vos systèmes existants.', icon: '/' },
  { title: 'Multi-espaces', description: 'Clients, employés, investisseurs, partenaires — chacun son accès.', icon: '≡' },
  { title: 'IA intégrée', description: 'Assistant intelligent pour analyser, décider et agir plus vite.', icon: '✱' },
  { title: 'Évolutif', description: 'Conçu pour supporter des milliers d’utilisateurs dès le premier jour.', icon: '↑' },
]

const trustSignals = [
  { label: 'Basée en RD Congo', detail: 'Kinshasa' },
  { label: 'SARL enregistrée', detail: 'Structure légale' },
  { label: 'IA opérationnelle', detail: 'GPT-4o intégré' },
  { label: 'Open Architecture', detail: 'API-first' },
  { label: 'Multi-sectoriel', detail: '8 domaines' },
]

/* ─── Page ─── */

export default function Home() {
  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="relative min-h-[92vh] overflow-hidden flex items-center">
        <GridPattern className="opacity-30 mask-fade-b" />
        <GlowOrb color="primary" size="xl" className="left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2" />
        <GlowOrb color="accent" size="md" className="right-0 top-0 translate-x-1/3 -translate-y-1/4" />

        <div className="container-content relative px-6 py-24 sm:px-8 md:py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-4xl"
          >
            <Badge variant="primary">JuntoX SARL &middot; Kinshasa, RD Congo</Badge>

            <h1 className="mt-8 font-serif text-display-xl font-semibold leading-none text-white max-[640px]:text-display">
              L&apos;intelligence{' '}
              <span className="text-gradient-primary">transform&eacute;e</span> en
              infrastructure.
            </h1>

            <p className="mt-8 max-w-2xl text-body-lg leading-relaxed text-neutral-400">
              Nous construisons une plateforme technologique durable qui combine IA, ing&eacute;nierie,
              investissement et formation pour r&eacute;soudre les probl&egrave;mes les plus complexes &mdash; depuis
              l&apos;Afrique, vers le monde.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/vision" size="lg">
                Explorer la vision
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Nos services
              </Button>
            </div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-surface/60 px-6 py-7 text-center backdrop-blur-sm md:px-8 md:py-9">
                <p className="font-serif text-heading-1 font-semibold text-white">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-caption text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 sm:px-8">
          {trustSignals.map((signal, i) => (
            <div key={signal.label} className="flex items-center gap-2 text-xs text-neutral-500">
              {i > 0 && <span className="hidden text-neutral-700 sm:inline">&middot;</span>}
              <span className="font-medium text-neutral-400">{signal.label}</span>
              <span className="text-neutral-600">{signal.detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════ GOLDEN CIRCLE ════════════ */}
      <section className="section-padding relative">
        <GlowOrb color="white" size="md" className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" animate={false} />

        <div className="container-content relative">
          <AnimatedSection className="text-center">
            <Badge>Notre raison d&apos;&ecirc;tre</Badge>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-display font-semibold text-white">
              Commencer par le <span className="text-gradient-primary">pourquoi</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-body-lg text-neutral-400">
              Chaque grande entreprise commence par une conviction profonde. La n&ocirc;tre : transformer
              l&apos;intelligence humaine en impact &eacute;conomique durable.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {goldenCircle.map((item, i) => (
              <AnimatedSection key={item.tag} delay={i * 0.15}>
                <div className={`group card-interactive h-full ${item.border}`}>
                  <span className={`text-overline font-bold ${item.color}`}>{item.tag}</span>
                  <h3 className="mt-4 font-serif text-heading-3 font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-body leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════ IMPACT NUMBERS ════════════ */}
      <section className="relative overflow-hidden border-y border-white/[0.04] bg-surface/30">
        <DotPattern className="opacity-60" />
        <div className="container-content relative grid gap-0 sm:grid-cols-3">
          <AnimatedSection className="border-b border-white/[0.04] px-8 py-14 text-center sm:border-b-0 sm:border-r">
            <p className="font-serif text-display font-semibold text-white">
              $<AnimatedCounter target={2} />T+
            </p>
            <p className="mt-3 text-caption text-neutral-500">March&eacute; adressable en Afrique</p>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="border-b border-white/[0.04] px-8 py-14 text-center sm:border-b-0 sm:border-r">
            <p className="font-serif text-display font-semibold text-white">
              <AnimatedCounter target={1} />.<AnimatedCounter target={4} duration={2500} />B
            </p>
            <p className="mt-3 text-caption text-neutral-500">Population du continent</p>
          </AnimatedSection>
          <AnimatedSection delay={0.3} className="px-8 py-14 text-center">
            <p className="font-serif text-display font-semibold text-gradient-primary">
              &lt;<AnimatedCounter target={3} />%
            </p>
            <p className="mt-3 text-caption text-neutral-500">&Eacute;conomie num&eacute;rique africaine vs mondiale</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════ SERVICES ════════════ */}
      <section className="section-padding relative">
        <GlowOrb color="accent" size="sm" className="right-0 top-0 translate-x-1/2" animate={false} />

        <div className="container-content relative">
          <AnimatedSection>
            <Badge variant="accent">Nos services</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-display font-semibold text-white">
              Des solutions con&ccedil;ues pour l&apos;impact
            </h2>
            <p className="mt-5 max-w-2xl text-body-lg text-neutral-400">
              Huit domaines d&apos;expertise int&eacute;gr&eacute;s dans une plateforme unique, de la strat&eacute;gie
              &agrave; l&apos;ex&eacute;cution.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.06}>
                <Link href={card.href} className="card-interactive group flex h-full flex-col">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-neutral-400 transition group-hover:bg-primary/10 group-hover:text-primary">
                    {card.icon}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
                    {card.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm text-neutral-600 transition group-hover:text-primary">
                    En savoir plus
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <Button href="/services" variant="secondary">
              Voir tous les services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════ ECOSYSTEM / PLATFORM ════════════ */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left">
              <Badge>Plateforme</Badge>
              <h2 className="mt-6 font-serif text-display font-semibold text-white">
                Un syst&egrave;me num&eacute;rique, pas un simple site
              </h2>
              <p className="mt-5 text-body-lg text-neutral-400">
                JuntoX est con&ccedil;u comme une infrastructure modulaire : API, tableaux de bord,
                espaces multi-r&ocirc;les, CRM, ERP et assistant IA int&eacute;gr&eacute;. Chaque brique peut &eacute;voluer
                ind&eacute;pendamment.
              </p>

              {/* Mini architecture diagram */}
              <div className="mt-8 rounded-xl border border-white/[0.06] bg-surface/60 p-5">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-primary/10 px-3 py-2.5 text-xs font-medium text-primary">Next.js 15</div>
                  <div className="rounded-lg bg-accent/10 px-3 py-2.5 text-xs font-medium text-accent-light">FastAPI</div>
                  <div className="rounded-lg bg-green-500/10 px-3 py-2.5 text-xs font-medium text-green-400">Supabase</div>
                </div>
                <div className="mt-2 grid grid-cols-4 gap-2 text-center">
                  <div className="rounded-lg bg-white/[0.03] px-2 py-2 text-xs text-neutral-500">TypeScript</div>
                  <div className="rounded-lg bg-white/[0.03] px-2 py-2 text-xs text-neutral-500">Tailwind</div>
                  <div className="rounded-lg bg-white/[0.03] px-2 py-2 text-xs text-neutral-500">OpenAI</div>
                  <div className="rounded-lg bg-white/[0.03] px-2 py-2 text-xs text-neutral-500">Docker</div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button href="/dashboard/admin" variant="secondary">
                  Voir le dashboard
                </Button>
                <Button href="/ai" variant="ghost">
                  Tester l&apos;IA
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {ecosystemFeatures.map((feature) => (
                  <div key={feature.title} className="card-base group">
                    <span className="text-xl text-neutral-600 transition group-hover:text-primary">{feature.icon}</span>
                    <h4 className="mt-3 text-sm font-semibold text-white">{feature.title}</h4>
                    <p className="mt-2 text-sm text-neutral-500">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Dashboard preview hint */}
              <div className="mt-4 rounded-xl border border-white/[0.06] bg-surface-elevated/40 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-neutral-600">dashboard.juntox.africa</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-white/[0.02] p-3">
                    <div className="h-2 w-8 rounded bg-white/[0.06]" />
                    <div className="mt-3 h-5 w-12 rounded bg-primary/20" />
                  </div>
                  <div className="rounded-lg bg-white/[0.02] p-3">
                    <div className="h-2 w-10 rounded bg-white/[0.06]" />
                    <div className="mt-3 h-5 w-8 rounded bg-accent/20" />
                  </div>
                  <div className="rounded-lg bg-white/[0.02] p-3">
                    <div className="h-2 w-6 rounded bg-white/[0.06]" />
                    <div className="mt-3 h-5 w-10 rounded bg-green-500/20" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════ CTA ════════════ */}
      <section className="section-padding relative overflow-hidden">
        <GlowOrb color="primary" size="lg" className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        <AnimatedSection className="container-content relative text-center">
          <h2 className="mx-auto max-w-3xl font-serif text-display font-semibold text-white">
            Rejoignez une entreprise qui{' '}
            <span className="text-gradient-primary">construit le futur</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-body-lg text-neutral-400">
            Que vous soyez investisseur, partenaire, client ou talent &mdash; il y a une place pour vous
            dans l&apos;&eacute;cosyst&egrave;me JuntoX.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Nous contacter
            </Button>
            <Button href="/investisseurs" variant="outline" size="lg">
              Espace investisseurs
            </Button>
            <Button href="/carrieres" variant="ghost" size="lg">
              Rejoindre l&apos;&eacute;quipe
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
