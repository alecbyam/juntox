'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const CX = 350
const CY = 350
const ORBIT = 230
const NODE_R = 28

const NODES = [
  { abbr: 'IA',  label: 'Technologies & IA',     color: '#dc2626', href: '/ai' },
  { abbr: 'ENG', label: 'Ingénierie',             color: '#3b82f6', href: '/ingenierie' },
  { abbr: 'BTP', label: 'Construction',           color: '#b8860b', href: '/construction' },
  { abbr: 'CST', label: 'Consultance',            color: '#dc2626', href: '/consultance' },
  { abbr: 'ETU', label: 'Études & Recherche',     color: '#3b82f6', href: '/recherche' },
  { abbr: 'FOR', label: 'Formation',              color: '#b8860b', href: '/formation' },
  { abbr: 'COM', label: 'Commerce',               color: '#dc2626', href: '/commerce' },
  { abbr: 'LOG', label: 'Logistique',             color: '#3b82f6', href: '/logistique' },
  { abbr: 'INV', label: 'Investissement',         color: '#b8860b', href: '/investissements' },
  { abbr: 'EM',  label: 'Secteurs Émergents',     color: '#dc2626', href: '/secteurs-emergents' },
]

function polar(i: number, total: number, r: number): { x: number; y: number } {
  const angle = (i * 2 * Math.PI) / total - Math.PI / 2
  return { x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) }
}

function labelAnchor(i: number, total: number): 'start' | 'middle' | 'end' {
  const angle = (i * 2 * Math.PI) / total - Math.PI / 2
  const cos = Math.cos(angle)
  if (cos > 0.25) return 'start'
  if (cos < -0.25) return 'end'
  return 'middle'
}

export function EcosystemDiagram() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()

  return (
    <div ref={ref} className="mx-auto w-full max-w-xl select-none" aria-label="Ecosystème JuntoX — 10 pôles connectés">
      <svg viewBox="0 0 700 700" className="w-full" overflow="visible">
        {/* Orbit ring */}
        <motion.circle
          cx={CX} cy={CY} r={ORBIT}
          fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={1} strokeDasharray="6 6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 1 }}
        />

        {/* Spoke lines */}
        {NODES.map((node, i) => {
          const p = polar(i, NODES.length, ORBIT)
          // Line from center edge to node edge
          const angle = (i * 2 * Math.PI) / NODES.length - Math.PI / 2
          const x1 = CX + 52 * Math.cos(angle)
          const y1 = CY + 52 * Math.sin(angle)
          const x2 = p.x - NODE_R * Math.cos(angle)
          const y2 = p.y - NODE_R * Math.sin(angle)
          return (
            <motion.line
              key={`line-${i}`}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={node.color}
              strokeWidth={0.9}
              strokeOpacity={0.3}
              strokeDasharray="3 4"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={inView ? { opacity: 1, pathLength: 1 } : {}}
              transition={{ delay: reduceMotion ? 0 : 0.6 + i * 0.07, duration: 0.5 }}
            />
          )
        })}

        {/* Pulse rings on center */}
        {!reduceMotion && [0, 1].map(r => (
          <motion.circle key={`pulse-${r}`} cx={CX} cy={CY} r={48}
            fill="none" stroke="rgba(185,28,28,0.2)" strokeWidth={1.5}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
            animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
            transition={{ delay: r * 1.1, duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}

        {/* Center hub */}
        <motion.circle
          cx={CX} cy={CY} r={48}
          fill="rgba(185,28,28,0.12)" stroke="#b91c1c" strokeWidth={1.5}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 180 }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />
        <motion.text x={CX} y={CY - 8} textAnchor="middle" dominantBaseline="middle"
          fontSize="18" fontWeight="700" letterSpacing="2" fill="white"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          JX
        </motion.text>
        <motion.text x={CX} y={CY + 12} textAnchor="middle" dominantBaseline="middle"
          fontSize="6.5" letterSpacing="2.5" fill="#6b7280"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}>
          JUNTOX
        </motion.text>

        {/* Satellite nodes + labels */}
        {NODES.map((node, i) => {
          const p = polar(i, NODES.length, ORBIT)
          const angle = (i * 2 * Math.PI) / NODES.length - Math.PI / 2
          const labelR = ORBIT + NODE_R + 22
          const lp = polar(i, NODES.length, labelR)
          const anchor = labelAnchor(i, NODES.length)
          const dy = Math.sin(angle) > 0.4 ? 0 : Math.sin(angle) < -0.4 ? 0 : -5

          return (
            <motion.g key={node.abbr}
              style={{ transformOrigin: `${p.x}px ${p.y}px` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: reduceMotion ? 0 : 0.5 + i * 0.08, duration: 0.4, type: 'spring', stiffness: 200 }}>
              {/* Node glow */}
              <circle cx={p.x} cy={p.y} r={NODE_R + 8} fill={node.color} opacity={0.06} />
              {/* Node circle */}
              <circle cx={p.x} cy={p.y} r={NODE_R}
                fill="rgba(11,11,15,0.95)" stroke={node.color} strokeWidth={1.2} strokeOpacity={0.7} />
              <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle"
                fontSize="9" fontWeight="700" letterSpacing="1" fill={node.color}>
                {node.abbr}
              </text>
              {/* Label */}
              <text x={lp.x} y={lp.y + dy} textAnchor={anchor} dominantBaseline="middle"
                fontSize="9.5" fill="#9ca3af" className="tracking-wide">
                {node.label}
              </text>
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}
