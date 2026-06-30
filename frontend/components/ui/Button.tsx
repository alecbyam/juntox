import Link from 'next/link'
import { type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'gold'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  href?: string
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-light shadow-glow hover:shadow-glow-lg btn-shimmer',
  secondary:
    'bg-white/[0.04] text-neutral-200 border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.14] shadow-inner-glow',
  ghost:
    'text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.03]',
  outline:
    'border border-primary/30 text-primary-light hover:bg-primary/[0.06] hover:border-primary/50',
  gold:
    'bg-gold/90 text-white hover:bg-gold-light shadow-glow-gold',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-body-sm',
  md: 'px-6 py-3 text-body-sm',
  lg: 'px-8 py-4 text-body',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-400 ease-out-expo ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
