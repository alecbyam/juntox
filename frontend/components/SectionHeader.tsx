'use client'

import { AnimatedSection } from './ui/AnimatedSection'
import { Badge } from './ui/Badge'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  badge?: 'default' | 'primary' | 'accent'
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  badge = 'default',
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  return (
    <AnimatedSection
      className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}
    >
      <Badge variant={badge}>{eyebrow}</Badge>
      <h2 className="mt-6 font-serif text-heading-1 font-semibold text-white">{title}</h2>
      {description && (
        <p className="mt-5 text-body-lg leading-relaxed text-neutral-400">{description}</p>
      )}
    </AnimatedSection>
  )
}
