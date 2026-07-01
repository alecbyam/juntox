'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { GridPattern, DotPattern } from '../components/ui/GridPattern'
import { GlowOrb } from '../components/ui/GlowOrb'
import { EcosystemDiagram } from '../components/ui/EcosystemDiagram'
import { ProcessFlow } from '../components/ui/ProcessFlow'
import { StatRing } from '../components/ui/StatRing'
import { HeroVisual } from '../components/ui/HeroVisual'

/* ─── Data ─── */

const stats = [
  { target: 10, suffix: '', label: 'Pôles d\'expertise' },
  { target: 50, suffix: '+', label: 'Services disponibles' },
  { target: 6, suffix: '', label: 'Pays ciblés' },
  { target: 100, suffix: '+', label: 'Années de vision' },
]

const goldenCircle = [
  {
    tag: 'WHY',
    title: 'Pourquoi nous existons',
    description:
      'La RDC possède un immense potentiel humain, economique et technologique qui reste insuffisamment valorise. Nous croyons que ses defis — infrastructures, transformation numerique, emploi des jeunes, logistique, gouvernance — peuvent etre releves grace a des solutions intelligentes, adaptees au contexte local et ouvertes aux standards internationaux. Nous voulons transformer les idees en projets concrets, les connaissances en solutions durables et les opportunites en impact mesurable.',
    color: 'text-primary',
    border: 'border-primary/20',
  },
  {
    tag: 'HOW',
    title: 'Comment nous agissons',
    description:
      'En reunissant plusieurs expertises au sein d\'un meme ecosysteme de transformation : technologies numeriques, intelligence artificielle, ingenierie, construction, etudes et recherche, consultance, gestion de projets, logistique, formation et investissement. Ces activites ne sont pas independantes — elles constituent un systeme integre, concu pour repondre aux realites du terrain congolais.',
    color: 'text-accent-light',
    border: 'border-accent/20',
  },
  {
    tag: 'WHAT',
    title: 'Ce que nous construisons',
    description:
      'Des projets concrets qui modernisent les infrastructures. Des entreprises accompagnees de l\'idee a l\'execution. Des emplois qualifies crees localement. Des institutions et des PME dotees des outils numeriques qu\'elles meritent. Chaque service que JuntoX propose est au service de cette mission — pas l\'inverse.',
    color: 'text-white',
    border: 'border-white/[0.1]',
  },
]

const serviceCards = [
  {
    title: 'Technologies & IA',
    description: 'Développement logiciel, web, mobile, intelligence artificielle, cybersécurité, cloud et transformation digitale.',
    href: '/ai',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: 'Ingénierie & Systèmes',
    description: 'Électronique, IoT, robotique, systèmes embarqués et automatisation industrielle.',
    href: '/ingenierie',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Construction & Génie Civil',
    description: 'Bâtiments, génie civil, rénovation, promotion immobilière, supervision et fourniture de matériaux.',
    href: '/construction',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Consultance & Études',
    description: 'Conseil stratégique, financier, informatique, gestion de projets, AMO, études et accompagnement institutionnel.',
    href: '/consultance',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3" />
      </svg>
    ),
  },
  {
    title: 'Logistique & Transport',
    description: 'Transport, transit, dédouanement, supply chain, entrepôts, distribution et chaîne du froid.',
    href: '/logistique',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-2.25h3.75m-3.75 0h-3.375c-.621 0-1.125.504-1.125 1.125V14.25" />
      </svg>
    ),
  },
  {
    title: 'Commerce & Distribution',
    description: 'Import-export, e-commerce, distribution, sourcing international et accompagnement ZLECAf.',
    href: '/commerce',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
      </svg>
    ),
  },
  {
    title: 'Formation',
    description: 'Leadership, IA, technologies, gestion, entrepreneuriat et plateforme e-learning pour les professionnels africains.',
    href: '/formation',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489" />
      </svg>
    ),
  },
  {
    title: 'Communication & Marketing',
    description: 'Marketing digital, branding, production audiovisuelle et communication institutionnelle.',
    href: '/communication',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
  {
    title: 'Investissement & Incubation',
    description: 'Capital-risque, incubation de startups, accélération, prise de participation et gestion de projets innovants.',
    href: '/investissements',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Secteurs Émergents',
    description: 'Énergie solaire, agriculture intelligente, santé numérique, éducation (EdTech) et finance numérique (FinTech).',
    href: '/secteurs-emergents',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
]

const ecosystemFeatures = [
  { title: 'API & Intégrations', description: 'Architecture ouverte pour connecter vos systèmes existants.', icon: '/' },
  { title: 'Multi-espaces', description: 'Clients, employés, investisseurs, partenaires — chacun son accès.', icon: '≡' },
  { title: 'IA intégrée', description: 'Assistant intelligent pour analyser, décider et agir plus vite.', icon: '✱' },
  { title: 'Evolutif', description: "Concu pour supporter des milliers d'utilisateurs des le premier jour.", icon: '↑' },
]

const trustSignals = [
  { label: 'Ancree en Ituri, RDC', detail: 'Bunia — coeur de l\'Est' },
  { label: 'SARL enregistree', detail: 'Structure legale congolaise' },
  { label: 'Impact local mesurable', detail: 'Projets, emplois, formations' },
  { label: 'Groupe multidisciplinaire', detail: '10 poles d\'expertise' },
  { label: 'Vision long terme', detail: 'Construire pour 100 ans' },
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
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px] xl:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Badge variant="primary">JuntoX SARL &middot; Bunia, Ituri, RD Congo</Badge>

              <h1 className="mt-8 font-serif text-display-xl font-semibold leading-[1.05] text-white">
                L&apos;intelligence{' '}
                <span className="text-gradient-primary">transform&eacute;e</span> en
                infrastructure.
              </h1>

              <p className="mt-8 max-w-2xl text-body-lg leading-relaxed text-neutral-400">
                La R&eacute;publique D&eacute;mocratique du Congo regorge d&apos;un potentiel humain, &eacute;conomique et
                technologique qui attend d&apos;&ecirc;tre valoris&eacute;. JuntoX est n&eacute; pour cela &mdash; en
                transformant les d&eacute;fis concrets du pays en solutions durables, depuis Bunia
                jusqu&apos;&agrave; l&apos;&eacute;chelle continentale.
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

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="hidden lg:flex items-center justify-center"
            >
              <HeroVisual />
            </motion.div>
          </div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] md:grid-cols-4"
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
              <svg className="h-3 w-3 shrink-0 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
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
              Pourquoi JuntoX <span className="text-gradient-primary">existe</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-body-lg text-neutral-400">
              Pourquoi une entreprise comme JuntoX na&icirc;t-elle &agrave; Bunia, en Ituri&nbsp;? Parce que les d&eacute;fis
              de la RDC ne manquent pas de solutions &mdash; ils manquent de b&acirc;tisseurs qui y croient
              et qui agissent.
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
        <DotPattern className="opacity-20" />
        <div className="container-content relative px-6 sm:px-8">
          <div className="flex flex-col items-center gap-14 py-16 sm:flex-row sm:justify-around sm:gap-8">
            <AnimatedSection>
              <StatRing
                value={100} max={100}
                label="Millions d'habitants"
                sublabel="Potentiel humain de la RDC"
                suffix="M+" color="primary" size="lg"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <StatRing
                value={80} max={100}
                label="Économie informelle"
                sublabel="À structurer et digitaliser"
                prefix=">" suffix="%" color="accent" size="lg"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <StatRing
                value={1} max={100}
                label="Part numérique mondiale"
                sublabel="L'opportunité à saisir"
                prefix="<" suffix="%" color="gold" size="lg"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES ════════════ */}
      <section className="section-padding relative">
        <GlowOrb color="accent" size="sm" className="right-0 top-0 translate-x-1/2" animate={false} />

        <div className="container-content relative">
          <AnimatedSection>
            <Badge variant="accent">Nos services</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-display font-semibold text-white">
              Dix expertises. Une seule mission.
            </h2>
            <p className="mt-5 max-w-2xl text-body-lg text-neutral-400">
              Chaque service que JuntoX propose est un outil au service de la m&ecirc;me vision :
              moderniser, former, construire et connecter la RDC et l&apos;Afrique centrale.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.06}>
                <Link href={card.href} className="card-interactive card-shine group flex h-full flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-neutral-500 transition-all duration-300 group-hover:border-primary/[0.15] group-hover:bg-primary/[0.08] group-hover:text-primary group-hover:shadow-[0_0_18px_rgba(185,28,28,0.08)]">
                    {card.icon}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
                    {card.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm text-neutral-600 transition-all duration-300 group-hover:gap-2.5 group-hover:text-primary">
                    En savoir plus
                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

      <div className="divider-dot" />

      {/* ════════════ ECOSYSTEM DIAGRAM ════════════ */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection direction="left">
              <div className="section-accent" />
              <Badge>Notre ecosysteme</Badge>
              <h2 className="mt-6 max-w-xl font-serif text-display font-semibold text-white">
                Un systeme int&eacute;gre,{' '}
                <span className="text-gradient-primary">pas une liste de services</span>
              </h2>
              <p className="mt-5 max-w-lg text-body-lg text-neutral-400">
                Chez JuntoX, les 10 p&ocirc;les d&apos;expertise ne fonctionnent pas en silos. Ils convergent
                vers une m&ecirc;me mission &mdash; la transformation concr&egrave;te et durable de la RDC
                et de l&apos;Afrique centrale.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 max-w-sm">
                {['Technologie', 'Ingenierie', 'Construction', 'Formation', 'Logistique', 'Investissement'].map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-neutral-500">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                    {p}
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.25} direction="right" className="flex items-center justify-center">
              <EcosystemDiagram />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════ PROCESS FLOW ════════════ */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-14 text-center">
            <Badge variant="accent">Notre methode</Badge>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-display font-semibold text-white">
              De la d&eacute;couverte &agrave; l&apos;impact
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-body-lg text-neutral-400">
              Chaque projet JuntoX suit une m&eacute;thode rigoureuse &mdash; adapt&eacute;e aux r&eacute;alit&eacute;s
              du terrain congolais, structur&eacute;e selon les standards internationaux.
            </p>
          </AnimatedSection>
          <ProcessFlow />
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

        <div className="container-content relative">
          <AnimatedSection>
            <div className="card-gradient-border px-8 py-16 text-center md:px-16">
              <h2 className="mx-auto max-w-3xl font-serif text-display font-semibold text-white">
                La RDC se construit{' '}
                <span className="text-gradient-primary">maintenant</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-body-lg text-neutral-400">
                Chaque partenariat, chaque projet, chaque solution contribue &agrave; transformer un pays.
                Entrepreneurs, investisseurs, institutions, ONG &mdash; rejoignez les b&acirc;tisseurs.
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
