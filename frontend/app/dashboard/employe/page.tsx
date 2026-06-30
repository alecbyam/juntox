'use client'

import { motion } from 'framer-motion'
import { Badge } from '../../../components/ui/Badge'
import { AnimatedCounter } from '../../../components/ui/AnimatedCounter'

const metrics = [
  { label: 'Tâches assignées', target: 5 },
  { label: 'Projets actifs', target: 2 },
  { label: 'Rapports soumis', target: 8 },
  { label: 'Heures cette semaine', target: 32 },
]

const tasks = [
  { title: 'Finaliser le rapport client Alpha', priority: 'Haute', due: 'Aujourd\'hui', done: false },
  { title: 'Réunion équipe IA — 14h', priority: 'Moyenne', due: 'Aujourd\'hui', done: false },
  { title: 'Revue de code dashboard admin', priority: 'Moyenne', due: 'Demain', done: false },
  { title: 'Mise à jour CRM contacts', priority: 'Basse', due: '2 jours', done: true },
]

const team = [
  { name: 'Équipe IA', members: 4, active: 3 },
  { name: 'Équipe Consultance', members: 6, active: 5 },
  { name: 'Équipe Construction', members: 5, active: 4 },
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
              <p className="mt-2 text-heading-2 font-semibold text-white">
                <AnimatedCounter target={metric.target} />
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Tasks */}
          <div className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
            <h2 className="text-sm font-semibold text-white">Vos tâches</h2>
            <div className="mt-4 space-y-0">
              {tasks.map((task) => (
                <div key={task.title} className="flex items-center gap-3 border-b border-white/[0.03] py-3 last:border-0">
                  <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${task.done ? 'border-green-500 bg-green-500/20' : 'border-white/[0.15]'}`}>
                    {task.done && (
                      <svg className="h-2.5 w-2.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    )}
                  </div>
                  <p className={`flex-1 text-sm ${task.done ? 'text-neutral-600 line-through' : 'text-neutral-300'}`}>
                    {task.title}
                  </p>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs ${
                    task.priority === 'Haute' ? 'bg-primary/10 text-primary-light' :
                    task.priority === 'Moyenne' ? 'bg-gold/10 text-gold-light' :
                    'bg-white/[0.04] text-neutral-500'
                  }`}>
                    {task.priority}
                  </span>
                  <span className="shrink-0 text-xs text-neutral-600">{task.due}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team status */}
          <div className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
            <h2 className="text-sm font-semibold text-white">Équipes actives</h2>
            <div className="mt-4 space-y-4">
              {team.map((t) => (
                <div key={t.name}>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-300">{t.name}</span>
                    <span className="text-neutral-600">{t.active}/{t.members}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.04]">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${(t.active / t.members) * 100}%` }}
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
