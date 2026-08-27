'use client'

import { motion } from 'framer-motion'
import { Badge } from '../../../components/ui/Badge'

// Pas encore de backend tâches/équipes — mieux vaut un état vide honnête
// qu'un jeu de données fictif. Remplacer par un vrai fetch dès que l'API
// de gestion de tâches existe (voir memoire project-juntox-platform, C-02).
const metrics = [
  { label: 'Tâches assignées', value: '—' },
  { label: 'Projets actifs', value: '—' },
  { label: 'Rapports soumis', value: '—' },
  { label: 'Heures cette semaine', value: '—' },
]

export default function EmployeDashboard() {
  return (
    <div className="px-5 py-6 sm:px-8 sm:py-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Badge variant="accent">Espace Employé</Badge>
        <h1 className="mt-3 font-serif text-heading-2 font-semibold text-white sm:text-heading-1">
          Tableau de bord collaborateur
        </h1>
        <p className="mt-2 text-body text-neutral-400">
          Vos tâches, vos projets et les outils internes JuntoX, en un seul endroit.
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
              <p className="mt-2 text-heading-2 font-semibold text-neutral-600">
                {metric.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Tasks */}
          <div className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
            <h2 className="text-sm font-semibold text-white">Vos tâches</h2>
            <p className="mt-4 py-6 text-center text-sm text-neutral-600">
              Aucune tâche assignée pour le moment.
            </p>
          </div>

          {/* Team status */}
          <div className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
            <h2 className="text-sm font-semibold text-white">Équipes actives</h2>
            <p className="mt-4 py-6 text-center text-sm text-neutral-600">
              Pas encore de données d&apos;équipe.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
