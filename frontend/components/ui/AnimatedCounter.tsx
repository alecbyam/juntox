'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type Props = {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const startTime = performance.now()

    function step(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * target)

      if (current !== start) {
        start = current
        setValue(current)
      }

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setValue(target)
      }
    }

    requestAnimationFrame(step)
  }, [isInView, target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{value}{suffix}
    </span>
  )
}
