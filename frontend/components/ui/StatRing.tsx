'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView, useReducedMotion, motion } from 'framer-motion'

type Props = {
  value: number
  max?: number
  label: string
  sublabel?: string
  prefix?: string
  suffix?: string
  color?: 'primary' | 'accent' | 'gold'
  size?: 'sm' | 'md' | 'lg'
}

const colorMap = {
  primary: { stroke: '#b91c1c', glow: 'rgba(185,28,28,0.3)', text: 'text-primary' },
  accent:  { stroke: '#1d4ed8', glow: 'rgba(29,78,216,0.3)',  text: 'text-accent-light' },
  gold:    { stroke: '#b8860b', glow: 'rgba(184,134,11,0.3)', text: 'text-gold-light' },
}

const sizeMap = {
  sm: { r: 36, stroke: 5, svg: 90, fontSize: '1.1rem', labelSize: 'text-xs' },
  md: { r: 50, stroke: 6, svg: 120, fontSize: '1.4rem', labelSize: 'text-sm' },
  lg: { r: 68, stroke: 7, svg: 160, fontSize: '2rem', labelSize: 'text-sm' },
}

export function StatRing({
  value,
  max = 100,
  label,
  sublabel,
  prefix = '',
  suffix = '',
  color = 'primary',
  size = 'md',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(0)

  const { r, stroke, svg } = sizeMap[size]
  const { stroke: strokeColor, glow, text } = colorMap[color]
  const circumference = 2 * Math.PI * r
  const pct = Math.min(value / max, 1)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) { setCount(value); return }
    let start: number | null = null
    const duration = 1600
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value, reduceMotion])

  const offset = circumference * (1 - (inView ? pct : 0))

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative">
        <svg width={svg} height={svg} viewBox={`0 0 ${svg} ${svg}`}>
          {/* Background ring */}
          <circle
            cx={svg / 2} cy={svg / 2} r={r}
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth={stroke}
          />
          {/* Glow filter */}
          <defs>
            <filter id={`glow-${color}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Progress ring */}
          <motion.circle
            cx={svg / 2} cy={svg / 2} r={r}
            fill="none"
            stroke={strokeColor}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${svg / 2} ${svg / 2})`}
            style={{ filter: `drop-shadow(0 0 6px ${glow})` }}
            animate={{ strokeDashoffset: circumference * (1 - (inView ? pct : 0)) }}
            transition={{ duration: reduceMotion ? 0 : 1.6, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-serif font-semibold text-white ${sizeMap[size].fontSize === '2rem' ? 'text-display' : sizeMap[size].fontSize === '1.4rem' ? 'text-heading-2' : 'text-heading-3'}`}>
            {prefix}{count}{suffix}
          </span>
        </div>
      </div>

      <div className="text-center">
        <p className={`font-medium text-white ${sizeMap[size].labelSize}`}>{label}</p>
        {sublabel && <p className="mt-0.5 text-xs text-neutral-500">{sublabel}</p>}
      </div>
    </div>
  )
}
