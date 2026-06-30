'use client'

import { motion } from 'framer-motion'
import { Badge } from '../../../components/ui/Badge'
import { AnimatedCounter } from '../../../components/ui/AnimatedCounter'

const metrics = [
  { label: 'Capital investi', target: 0, prefix: '$' },
  { label: 'Deals actifs', target: 0 },
  { label: 'Entreprises suivies', target: 0 },
  { label: 'Rapports reçus', target: 0 },
]

const pipeline = [
  { stage: 'Sourcing', count: 6, color: 'bg-white/[0.08]' },
  { stage: 'Due diligence', count: 3, color: 'bg-accent/40' },
  { stage: 'Négociation', count: 1, color: 'bg-gold/40' },
  { stage: 'Conclu', count: 0, color: 'bg-green-500/40' },
]

const sectors = [
  { name: 'IA & Logiciels', allocation: 35 },
  { name: 'Infrastructures', allocation: 25 },
  { name: 'Agro-industrie', allocation: 20 },
  { name: 'Fintech', allocation: 20 },
]

export default function InvestisseurDashboard() {
  return (
    <div className="px-5 py-6 sm:px-8 sm:py-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Badge variant="primary">Espace Investisseur</Badge>
        <h1 className="mt-3 font-serif text-heading-2 font-semibold text-white sm:text-heading-1">
          Tableau de bord investisseur
        </h1>
        <p className="mt-2 text-body text-neutral-400">
          Suivez votre portefeuille, le pipeline de deals et les rapports de performance JuntoX.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5"
            >
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-neutral-600">
                {metric.label}
              </p>
              <p className="mt-2 text-heading-2 font-semibold text-white">
                <AnimatedCounter target={metric.target} prefix={metric.prefix} />
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Pipeline */}
          <div className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
            <h2 className="text-sm font-semibold text-white">Pipeline de deals</h2>
            <div className="mt-5 grid grid-cols-4 gap-3">
              {pipeline.map((stage) => (
                <div key={stage.stage} className="text-center">
                  <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-xl ${stage.color} sm:h-20 sm:w-20`}>
                    <span className="text-xl font-semibold text-white sm:text-2xl">{stage.count}</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-500">{stage.stage}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-neutral-500">
              Aucun deal n&apos;est encore associé à votre compte. Contactez notre équipe investissement pour accéder au pipeline complet.
            </p>
          </div>

          {/* Sector allocation reference */}
          <div className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
            <h2 className="text-sm font-semibold text-white">Allocation cible JuntoX</h2>
            <div className="mt-5 space-y-4">
              {sectors.map((sector) => (
                <div key={sector.name}>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">{sector.name}</span>
                    <span className="text-neutral-600">{sector.allocation}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.04]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                      style={{ width: `${sector.allocation}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
