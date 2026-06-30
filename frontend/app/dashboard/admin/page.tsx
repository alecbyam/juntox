'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Badge } from '../../../components/ui/Badge'
import { AnimatedCounter } from '../../../components/ui/AnimatedCounter'

const metrics = [
  { label: 'Projets actifs', target: 24, trend: '+3', trendUp: true },
  { label: 'Études en cours', target: 12, trend: '+2', trendUp: true },
  { label: 'Capital mobilisé', prefix: '$', target: 18, suffix: 'M', trend: '+5M', trendUp: true },
  { label: 'Partenaires', target: 8, trend: '+1', trendUp: true },
]

const revenueChart = [
  { month: 'Jan', value: 30 },
  { month: 'Fév', value: 45 },
  { month: 'Mar', value: 35 },
  { month: 'Avr', value: 55 },
  { month: 'Mai', value: 50 },
  { month: 'Jun', value: 72 },
]

const sectorDistribution = [
  { name: 'IA', value: 35, color: 'bg-accent' },
  { name: 'Consultance', value: 25, color: 'bg-primary' },
  { name: 'Construction', value: 20, color: 'bg-green-500' },
  { name: 'Autres', value: 20, color: 'bg-neutral-500' },
]

const recentActivity = [
  { action: 'Nouvelle étude de marché créée', time: 'Il y a 2h', type: 'Consultance', typeColor: 'text-primary' },
  { action: 'Analyse IA complétée — Projet Alpha', time: 'Il y a 5h', type: 'IA', typeColor: 'text-accent-light' },
  { action: 'Nouveau partenaire ajouté', time: 'Hier', type: 'Partenariat', typeColor: 'text-green-400' },
  { action: 'Business plan généré — StartupX', time: 'Hier', type: 'IA', typeColor: 'text-accent-light' },
  { action: 'Estimation chantier Terminal 3', time: 'Il y a 2j', type: 'Construction', typeColor: 'text-yellow-400' },
]

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

  const maxChart = Math.max(...revenueChart.map((d) => d.value))

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
                  <AnimatedCounter target={metric.target} prefix={metric.prefix} suffix={metric.suffix} />
                </p>
                <span className={`mb-1 text-xs font-medium ${metric.trendUp ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.trend}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts row */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          {/* Bar chart */}
          <div className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white">Performance mensuelle</h2>
              <span className="text-xs text-neutral-600">2026</span>
            </div>
            <div className="mt-6 flex items-end gap-3 h-40">
              {revenueChart.map((d) => (
                <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
                  <div className="relative w-full">
                    <div
                      className="w-full rounded-t-md bg-primary/80 transition-all hover:bg-primary"
                      style={{ height: `${(d.value / maxChart) * 128}px` }}
                    />
                  </div>
                  <span className="text-[0.6rem] text-neutral-600">{d.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sector distribution */}
          <div className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
            <h2 className="text-sm font-semibold text-white">R&eacute;partition par secteur</h2>
            <div className="mt-6 space-y-3">
              {sectorDistribution.map((sector) => (
                <div key={sector.name}>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">{sector.name}</span>
                    <span className="text-neutral-500">{sector.value}%</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/[0.04]">
                    <div
                      className={`h-full rounded-full ${sector.color} transition-all`}
                      style={{ width: `${sector.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg bg-white/[0.02] p-3">
              <p className="text-xs text-neutral-600">Total projets actifs</p>
              <p className="mt-1 text-lg font-semibold text-white">24</p>
            </div>
          </div>
        </div>

        {/* Activity + Actions */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Activity */}
          <div className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-5">
            <h2 className="text-sm font-semibold text-white">Activit&eacute; r&eacute;cente</h2>
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
