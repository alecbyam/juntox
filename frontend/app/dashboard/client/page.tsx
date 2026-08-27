'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '../../../components/ui/Badge'

// Pas encore de backend projets/documents client — mieux vaut un état vide
// honnête qu'un jeu de données fictif. Remplacer par un vrai fetch dès que
// l'API de suivi de projet existe (voir memoire project-juntox-platform, C-02).
const metrics = [
  { label: 'Projets actifs', value: '—' },
  { label: 'Études livrées', value: '—' },
  { label: 'Documents partagés', value: '—' },
  { label: 'Analyses IA générées', value: '—' },
]

const quickActions = [
  { label: 'Soumettre un nouveau projet', href: '/contact', description: 'Décrivez votre besoin à l\'équipe JuntoX.' },
  { label: 'Analyser avec JuntoX AI', href: '/ai', description: 'Obtenez une évaluation instantanée.' },
  { label: 'Voir nos services', href: '/services', description: 'Explorez l\'offre complète.' },
]

export default function ClientDashboard() {
  return (
    <div className="px-5 py-6 sm:px-8 sm:py-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Badge>Espace Client</Badge>
        <h1 className="mt-3 font-serif text-heading-2 font-semibold text-white sm:text-heading-1">
          Bienvenue dans votre espace
        </h1>
        <p className="mt-2 text-body text-neutral-400">
          Suivez vos projets, accédez aux analyses IA et communiquez avec l&apos;équipe JuntoX.
        </p>

        {/* Metrics */}
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
              <p className="mt-2 text-heading-2 font-semibold text-neutral-600">
                {metric.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Projects */}
          <div className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
            <h2 className="text-sm font-semibold text-white">Vos projets</h2>
            <p className="mt-4 py-6 text-center text-sm text-neutral-600">
              Aucun projet en cours pour le moment.
            </p>
          </div>

          {/* Quick actions */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-white">Actions rapides</h2>
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="group block rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-4 transition hover:border-white/[0.1] hover:bg-surface-elevated/70"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">{action.label}</p>
                  <svg className="h-3.5 w-3.5 text-neutral-600 transition group-hover:text-primary group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <p className="mt-1 text-xs text-neutral-600">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="mt-6 rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
          <h2 className="text-sm font-semibold text-white">Documents partagés</h2>
          <p className="mt-4 py-6 text-center text-sm text-neutral-600">
            Aucun document partagé pour le moment.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
