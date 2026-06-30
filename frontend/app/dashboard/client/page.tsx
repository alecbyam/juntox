'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '../../../components/ui/Badge'
import { AnimatedCounter } from '../../../components/ui/AnimatedCounter'

const metrics = [
  { label: 'Projets actifs', target: 2 },
  { label: 'Études livrées', target: 1 },
  { label: 'Documents partagés', target: 7 },
  { label: 'Analyses IA générées', target: 4 },
]

const projects = [
  { name: 'Refonte plateforme interne', sector: 'IA & Logiciels', status: 'En cours', progress: 65 },
  { name: 'Étude de marché export', sector: 'Consultance', status: 'Révision', progress: 90 },
]

const documents = [
  { name: 'Rapport d\'analyse — Q2 2026.pdf', date: '24 juin 2026', size: '2.4 Mo' },
  { name: 'Business plan — v3.pdf', date: '18 juin 2026', size: '1.1 Mo' },
  { name: 'Contrat de mission.pdf', date: '2 juin 2026', size: '480 Ko' },
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
              <p className="mt-2 text-heading-2 font-semibold text-white">
                <AnimatedCounter target={metric.target} />
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Projects */}
          <div className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
            <h2 className="text-sm font-semibold text-white">Vos projets</h2>
            <div className="mt-4 space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="rounded-lg border border-white/[0.04] bg-white/[0.015] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-neutral-200">{project.name}</p>
                      <p className="mt-1 text-xs text-neutral-600">{project.sector}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-1 text-xs text-accent-light">
                      {project.status}
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.04]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-right text-xs text-neutral-600">{project.progress}%</p>
                </div>
              ))}
            </div>
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
          <div className="mt-4 space-y-0">
            {documents.map((doc) => (
              <div key={doc.name} className="flex items-center justify-between gap-3 border-b border-white/[0.03] py-3 last:border-0">
                <div className="flex items-center gap-3 min-w-0">
                  <svg className="h-4 w-4 shrink-0 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <span className="truncate text-sm text-neutral-300">{doc.name}</span>
                </div>
                <div className="flex shrink-0 items-center gap-3 text-xs text-neutral-600">
                  <span>{doc.date}</span>
                  <span>{doc.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
