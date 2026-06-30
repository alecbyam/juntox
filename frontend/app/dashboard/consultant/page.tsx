'use client'

import { motion } from 'framer-motion'
import { Badge } from '../../../components/ui/Badge'
import { AnimatedCounter } from '../../../components/ui/AnimatedCounter'

const metrics = [
  { label: 'Missions actives', target: 0 },
  { label: 'Rapports livrés', target: 0 },
  { label: 'Analyses IA utilisées', target: 0 },
  { label: 'Clients accompagnés', target: 0 },
]

const tools = [
  { title: 'Analyse de projet', description: 'Lancer une analyse IA structurée pour un client.', href: '/ai' },
  { title: 'Générateur de business plan', description: 'Produire un business plan complet en quelques minutes.', href: '/ai' },
  { title: 'Rapport automatisé', description: 'Générer un rapport professionnel synthétique.', href: '/ai' },
]

export default function ConsultantDashboard() {
  return (
    <div className="px-5 py-6 sm:px-8 sm:py-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Badge variant="accent">Espace Consultant</Badge>
        <h1 className="mt-3 font-serif text-heading-2 font-semibold text-white sm:text-heading-1">
          Espace consultant
        </h1>
        <p className="mt-2 text-body text-neutral-400">
          Gérez vos missions, accédez aux outils d&apos;analyse et produisez des rapports avec l&apos;IA.
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
                <AnimatedCounter target={metric.target} />
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6">
          <h2 className="text-sm font-semibold text-white">Outils IA pour vos missions</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {tools.map((tool) => (
              <a
                key={tool.title}
                href={tool.href}
                className="group block rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5 transition hover:border-accent/30 hover:bg-surface-elevated/70"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-light">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-white">{tool.title}</h3>
                <p className="mt-1.5 text-xs text-neutral-500">{tool.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
          <h2 className="text-sm font-semibold text-white">Vos missions</h2>
          <p className="mt-4 text-sm text-neutral-500">
            Aucune mission active pour le moment. Les missions assignées par l&apos;équipe JuntoX apparaîtront ici.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
