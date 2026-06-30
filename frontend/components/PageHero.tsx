'use client'

import { motion } from 'framer-motion'
import { Badge } from './ui/Badge'
import { GridPattern } from './ui/GridPattern'
import { type ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
  badge?: 'default' | 'primary' | 'accent' | 'gold'
}

export function PageHero({ eyebrow, title, description, children, badge = 'primary' }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.03] bg-gradient-surface py-24 md:py-32">
      <GridPattern className="opacity-30 mask-fade-b" />

      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2">
        <div className="h-full w-full rounded-full bg-primary/[0.03] blur-[140px]" />
      </div>

      <div className="container-content relative px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl"
        >
          <Badge variant={badge}>{eyebrow}</Badge>
          <h1 className="mt-8 font-serif text-display font-semibold text-white">{title}</h1>
          <p className="mt-6 text-body-lg leading-relaxed text-neutral-400">{description}</p>
          {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}
