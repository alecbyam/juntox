'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Badge } from '../../../components/ui/Badge'
import { AnimatedCounter } from '../../../components/ui/AnimatedCounter'

const metrics = [
  { label: 'Projets actifs', target: 0, trend: '', trendUp: true },
  { label: 'Études en cours', target: 0, trend: '', trendUp: true },
  { label: 'Partenaires', target: 0, trend: '', trendUp: true },
  { label: 'Messages reçus', target: 0, trend: '', trendUp: true },
]

const recentActivity: { action: string; time: string; type: string; typeColor: string }[] = []

const quickActions = [
  { label: 'Analyser un projet', href: '/ai', description: 'Lancer une analyse IA structurée' },
  { label: 'Nouvelle étude', href: '/consultance', description: 'Démarrer un cycle de recherche' },
  { label: 'Pipeline deals', href: '/investissements', description: 'Gérer les investissements' },
  { label: 'Voir le portfolio', href: '/portfolio', description: 'Projets et réalisations' },
]

export default function AdminDashboard() {
  const [aiStatus, setAiStatus] = useState('Chargement...')

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000'}/api/ai/status`)
      .then((r) => r.json())
      .then((data) => setAiStatus(data.status))
      .catch(() => setAiStatus('Hors ligne'))
  }, [])

  return (
    <div className="px-5 py-6 sm:px-8 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge variant="primary">Dashboard administrateur</Badge>
            <h1 className="mt-3 font-serif text-heading-2 font-semibold text-white sm:text-heading-1">
              Vue d&apos;ensemble
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${aiStatus === 'operational' ? 'bg-green-400' : 'bg-yellow-400'}`} />
            <span className="text-xs text-neutral-500">
              JuntoX AI: {aiStatus === 'operational' ? 'En ligne' : aiStatus}
            </span>
          </div>
        </div>

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
              <div className="mt-2 flex items-end gap-2">
                <p className="text-heading-2 font-semibold text-white">
                  <AnimatedCounter target={metric.target} />
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity + Actions */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Activity */}
          <div className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
            <h2 className="text-sm font-semibold text-white">Activité récente</h2>
            {recentActivity.length === 0 ? (
              <div className="mt-8 flex flex-col items-center justify-center gap-2 py-6 text-center">
                <p className="text-sm text-neutral-500">Aucune activité pour le moment</p>
                <p className="text-xs text-neutral-700">Les événements apparaîtront ici dès que des actions seront effectuées.</p>
              </div>
            ) : (
              <div className="mt-4 space-y-0">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.action}
                    className="flex items-start justify-between gap-3 border-b border-white/[0.03] py-3.5 last:border-0"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm text-neutral-300">{activity.action}</p>
                      <p className="mt-0.5 text-xs text-neutral-600">{activity.time}</p>
                    </div>
                    <span className={`shrink-0 text-xs font-medium ${activity.typeColor}`}>
                      {activity.type}
                    </span>
                  </div>
                ))}
              </div>
            )}
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
      </motion.div>
    </div>
  )
}
