'use client'

import { useEffect, useState } from 'react'

export function ReadingProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setPct(total > 0 ? (el.scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-[2px] bg-gradient-to-r from-primary to-primary-light transition-none"
      style={{ width: `${pct}%` }}
      role="progressbar"
      aria-label="Progression de lecture"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  )
}
