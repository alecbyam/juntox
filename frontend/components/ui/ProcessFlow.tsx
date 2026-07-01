'use client'

import { Fragment, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: 'Découverte',
    desc: 'Analyse du contexte, identification des enjeux et cartographie des besoins réels du terrain.',
    color: 'text-primary',
    bg: 'bg-primary/[0.06]',
    border: 'border-primary/20',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Analyse',
    desc: "Évaluation des solutions, études de faisabilité et modélisation de l'impact attendu.",
    color: 'text-accent-light',
    bg: 'bg-accent/[0.06]',
    border: 'border-accent/20',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Conception',
    desc: 'Architecture de la solution adaptée aux contraintes locales et calibrée sur les standards mondiaux.',
    color: 'text-gold-light',
    bg: 'bg-gold/[0.06]',
    border: 'border-gold/20',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Réalisation',
    desc: 'Développement, construction ou déploiement avec rigueur et excellence opérationnelle.',
    color: 'text-primary',
    bg: 'bg-primary/[0.06]',
    border: 'border-primary/20',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Déploiement',
    desc: 'Mise en œuvre terrain, formation des équipes et accompagnement au changement.',
    color: 'text-accent-light',
    bg: 'bg-accent/[0.06]',
    border: 'border-accent/20',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Suivi & Impact',
    desc: "Mesure des résultats, optimisation continue et rapport transparent sur l'impact créé.",
    color: 'text-gold-light',
    bg: 'bg-gold/[0.06]',
    border: 'border-gold/20',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
]

type StepProps = {
  step: (typeof STEPS)[number]
  inView: boolean
  reduceMotion: boolean | null
  delay: number
}

function StepCard({ step, inView, reduceMotion, delay }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: reduceMotion ? 0 : delay, duration: 0.5 }}
      className={
        'relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 ' +
        step.border + ' ' + step.bg
      }
    >
      {/* Ghost number */}
      <span
        className="pointer-events-none absolute -right-1 -top-2 select-none font-serif text-[5.5rem] font-bold leading-none text-white opacity-[0.03] transition-opacity duration-300"
        aria-hidden="true"
      >
        {step.num}
      </span>

      <div className="flex items-center gap-3 mb-3">
        <div className={'flex h-9 w-9 items-center justify-center rounded-xl bg-surface/70 ' + step.color}>
          {step.icon}
        </div>
        <span className={'text-[10px] font-bold tracking-[0.2em] opacity-40 ' + step.color}>{step.num}</span>
      </div>
      <h4 className="text-sm font-semibold text-white mb-2">{step.title}</h4>
      <p className="text-xs leading-relaxed text-neutral-500 flex-1">{step.desc}</p>
    </motion.div>
  )
}

function ArrowH() {
  return (
    <div className="flex w-8 shrink-0 items-center justify-center text-neutral-700/50" aria-hidden="true">
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
        <path d="M0 8h16M10 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export function ProcessFlow() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduceMotion = useReducedMotion()

  return (
    <div ref={ref} className="w-full">

      {/* ── Desktop: two flex rows with arrows ── */}
      <div className="hidden lg:flex lg:flex-col lg:gap-3">

        {/* Row 1: 01 → 02 → 03 */}
        <div className="flex items-stretch">
          {STEPS.slice(0, 3).map((step, i) => (
            <Fragment key={step.num}>
              <div className="flex-1 min-w-0">
                <StepCard step={step} inView={inView} reduceMotion={reduceMotion} delay={i * 0.1} />
              </div>
              {i < 2 && <ArrowH />}
            </Fragment>
          ))}
        </div>

        {/* Vertical connector: right side flows down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex items-center justify-end pr-3 py-0.5"
          aria-hidden="true"
        >
          <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
            <path d="M9 0v20M3 14l6 8 6-8" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {/* Row 2: 04 → 05 → 06 */}
        <div className="flex items-stretch">
          {STEPS.slice(3).map((step, i) => (
            <Fragment key={step.num}>
              <div className="flex-1 min-w-0">
                <StepCard step={step} inView={inView} reduceMotion={reduceMotion} delay={(3 + i) * 0.1} />
              </div>
              {i < 2 && <ArrowH />}
            </Fragment>
          ))}
        </div>
      </div>

      {/* ── Mobile: stacked list ── */}
      <div className="space-y-3 lg:hidden">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: reduceMotion ? 0 : i * 0.08, duration: 0.4 }}
            className={'flex gap-4 rounded-xl border p-4 ' + step.border + ' ' + step.bg}
          >
            <div className={'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface/70 ' + step.color}>
              {step.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={'text-[10px] font-bold tracking-[0.2em] opacity-40 ' + step.color}>{step.num}</span>
                <h4 className="text-sm font-semibold text-white">{step.title}</h4>
              </div>
              <p className="text-xs leading-relaxed text-neutral-500">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
