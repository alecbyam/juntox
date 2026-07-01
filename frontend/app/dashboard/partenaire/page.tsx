'use client'

import { motion } from 'framer-motion'
import { Badge } from '../../../components/ui/Badge'
import { AnimatedCounter } from '../../../components/ui/AnimatedCounter'

const metrics = [
  { label: 'Projets conjoints', target: 0 },
  { label: 'Ressources partagées', target: 0 },
  { label: 'Contacts échangés', target: 0 },
  { label: 'Mois de partenariat', target: 0 },
]

const partnershipTypes = [
  { title: 'Technologique', description: 'Co-développement de solutions et intégrations API.' },
  { title: 'Institutionnel', description: 'Programmes conjoints et soutien au développement local.' },
  { title: 'Académique', description: 'Recherche, formation et transfert de connaissances.' },
  { title: 'Commercial', description: 'Distribution croisée et opportunités d\'affaires partagées.' },
]

export default function PartenaireDashboard() {
  return (
    <div className="px-5 py-6 sm:px-8 sm:py-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Badge>Espace Partenaire</Badge>
        <h1 className="mt-3 font-serif text-heading-2 font-semibold text-white sm:text-heading-1">
          Espace Partenaire
        </h1>
        <p className="mt-2 text-body text-neutral-400">
          Suivez les projets conjoints, accédez aux ressources partagées et communiquez avec JuntoX.
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
          <h2 className="text-sm font-semibold text-white">Type de partenariat</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnershipTypes.map((type) => (
              <div key={type.title} className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
                <h3 className="text-sm font-semibold text-white">{type.title}</h3>
                <p className="mt-2 text-xs text-neutral-500">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
          <h2 className="text-sm font-semibold text-white">Projets conjoints</h2>
          <p className="mt-4 text-sm text-neutral-500">
            Aucun projet conjoint actif pour le moment. Contactez votre référent JuntoX pour explorer de nouvelles synergies.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
