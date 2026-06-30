import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
  variant?: 'default' | 'primary' | 'accent' | 'gold'
  className?: string
}

const variants = {
  default: 'border-white/[0.08] bg-white/[0.03] text-neutral-400',
  primary: 'border-primary/20 bg-primary/[0.05] text-primary-light',
  accent: 'border-accent/20 bg-accent/[0.05] text-accent-light',
  gold: 'border-gold/20 bg-gold/[0.05] text-gold-light',
}

export function Badge({ children, variant = 'default', className = '' }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-overline font-semibold uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
