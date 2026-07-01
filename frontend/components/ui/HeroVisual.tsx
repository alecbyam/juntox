'use client'

import { motion, useReducedMotion } from 'framer-motion'

const ORBIT_NODES = [
  { abbr: 'IA',  color: '#dc2626', angle: -90 },
  { abbr: 'ENG', color: '#3b82f6', angle: -18 },
  { abbr: 'BTP', color: '#b8860b', angle:  54 },
  { abbr: 'LOG', color: '#3b82f6', angle: 126 },
  { abbr: 'FOR', color: '#dc2626', angle: 198 },
]

const FLOAT_CARDS = [
  { value: '10',  label: "Pôles d'expertise", color: '#dc2626', x: '64%', y: '3%'  },
  { value: '6',   label: 'Pays ciblés',        color: '#3b82f6', x: '0%',  y: '20%' },
  { value: '50+', label: 'Services actifs',    color: '#b8860b', x: '58%', y: '80%' },
]

export function HeroVisual() {
  const reduce = useReducedMotion()
  const CX = 220, CY = 220, R = 155

  return (
    <div
      className="relative select-none"
      style={{ width: '100%', maxWidth: 440, margin: '0 auto' }}
      aria-hidden="true"
    >
      {/* Floating metric cards */}
      {FLOAT_CARDS.map((m, i) => (
        <motion.div
          key={m.label}
          style={{ left: m.x, top: m.y, position: 'absolute' }}
          className="z-10 rounded-xl border border-white/[0.07] bg-surface-elevated/80 px-3 py-2 backdrop-blur-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + i * 0.2, duration: 0.5, ease: 'easeOut' }}
        >
          <p className="font-serif text-lg font-semibold leading-none" style={{ color: m.color }}>
            {m.value}
          </p>
          <p className="mt-0.5 text-[9px] uppercase tracking-widest text-neutral-500">{m.label}</p>
        </motion.div>
      ))}

      <svg viewBox="0 0 440 440" className="w-full" overflow="visible">
        <defs>
          <filter id="hv-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Concentric rings */}
        {[R, R * 0.78, R * 0.55, R * 0.32].map((r, i) => (
          <circle key={r} cx={CX} cy={CY} r={r}
            fill="none"
            stroke={`rgba(255,255,255,${0.025 + i * 0.008})`}
            strokeWidth={1}
            strokeDasharray={i === 0 ? '5 7' : undefined}
          />
        ))}

        {/* Cross-hair lines */}
        {[0, 45, 90, 135].map(deg => {
          const rad = deg * Math.PI / 180
          return (
            <line key={deg}
              x1={CX - R * Math.cos(rad)} y1={CY - R * Math.sin(rad)}
              x2={CX + R * Math.cos(rad)} y2={CY + R * Math.sin(rad)}
              stroke="rgba(255,255,255,0.02)" strokeWidth={1}
            />
          )
        })}

        {/* Rotating scan arc */}
        {!reduce && (
          <motion.g
            style={{ transformOrigin: `${CX}px ${CY}px` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            <line x1={CX} y1={CY} x2={CX + R} y2={CY}
              stroke="#b91c1c" strokeWidth={1.5} strokeOpacity={0.55} />
            <path
              d={`M ${CX} ${CY}
                  L ${CX + R} ${CY}
                  A ${R} ${R} 0 0 0
                  ${CX + R * Math.cos(-0.55)} ${CY + R * Math.sin(-0.55)} Z`}
              fill="rgba(185,28,28,0.05)"
            />
          </motion.g>
        )}

        {/* Spoke lines */}
        {ORBIT_NODES.map((node, i) => {
          const rad = node.angle * Math.PI / 180
          const nx = CX + R * Math.cos(rad)
          const ny = CY + R * Math.sin(rad)
          return (
            <motion.line key={i}
              x1={CX} y1={CY} x2={nx} y2={ny}
              stroke={node.color} strokeWidth={0.8} strokeOpacity={0.2} strokeDasharray="3 6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.7 }}
            />
          )
        })}

        {/* Inner orbit dots */}
        {[0, 72, 144, 216, 288].map((deg, i) => {
          const rad = deg * Math.PI / 180
          const r2 = R * 0.55
          return (
            <motion.circle key={deg}
              cx={CX + r2 * Math.cos(rad)} cy={CY + r2 * Math.sin(rad)} r={2.5}
              fill="rgba(255,255,255,0.1)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.08 }}
            />
          )
        })}

        {/* Pulse rings from center */}
        {!reduce && [0, 1].map(idx => (
          <motion.circle key={idx} cx={CX} cy={CY} r={36}
            fill="none" stroke="rgba(185,28,28,0.22)" strokeWidth={1.5}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
            animate={{ scale: [1, 3.2], opacity: [0.6, 0] }}
            transition={{ delay: idx * 1.4, duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}

        {/* Center hub */}
        <motion.circle cx={CX} cy={CY} r={36}
          fill="rgba(185,28,28,0.1)" stroke="#b91c1c" strokeWidth={1.5}
          filter="url(#hv-glow)"
          style={{ transformOrigin: `${CX}px ${CY}px` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
        />
        <motion.text x={CX} y={CY - 5} textAnchor="middle" dominantBaseline="middle"
          fontSize="16" fontWeight="700" letterSpacing="1.5" fill="white"
          fontFamily="Georgia, serif"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        >
          JX
        </motion.text>
        <motion.text x={CX} y={CY + 12} textAnchor="middle" dominantBaseline="middle"
          fontSize="5.5" letterSpacing="2.5" fill="rgba(107,114,128,0.75)"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
        >
          JUNTOX
        </motion.text>

        {/* Orbit nodes */}
        {ORBIT_NODES.map((node, i) => {
          const rad = node.angle * Math.PI / 180
          const nx = CX + R * Math.cos(rad)
          const ny = CY + R * Math.sin(rad)
          return (
            <motion.g key={i}
              style={{ transformOrigin: `${nx}px ${ny}px` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.4, type: 'spring', stiffness: 220 }}
            >
              <circle cx={nx} cy={ny} r={26} fill={node.color} opacity={0.07} />
              <circle cx={nx} cy={ny} r={16}
                fill="rgba(11,11,15,0.95)" stroke={node.color} strokeWidth={1.3} strokeOpacity={0.8} />
              <text x={nx} y={ny} textAnchor="middle" dominantBaseline="middle"
                fontSize="6" fontWeight="700" letterSpacing="0.8" fill={node.color}
              >
                {node.abbr}
              </text>
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}
