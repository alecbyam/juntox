type Props = {
  color?: 'primary' | 'accent' | 'gold' | 'white'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animate?: boolean
}

const colors = {
  primary: 'bg-primary/[0.05]',
  accent: 'bg-accent/[0.04]',
  gold: 'bg-gold/[0.04]',
  white: 'bg-white/[0.02]',
}

// Smaller dimensions + lighter blur on mobile — large blur filters are GPU-expensive
// and these are purely decorative, so cheapen them below the sm breakpoint.
const sizes = {
  sm: 'h-[140px] w-[200px] blur-[60px] sm:h-[200px] sm:w-[300px] sm:blur-[100px]',
  md: 'h-[220px] w-[320px] blur-[70px] sm:h-[350px] sm:w-[500px] sm:blur-[120px]',
  lg: 'h-[300px] w-[420px] blur-[80px] sm:h-[500px] sm:w-[700px] sm:blur-[140px]',
  xl: 'h-[360px] w-[520px] blur-[90px] sm:h-[600px] sm:w-[900px] sm:blur-[160px]',
}

export function GlowOrb({ color = 'primary', size = 'lg', className = '', animate = true }: Props) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <div
        className={`rounded-full ${colors[color]} ${sizes[size]} ${
          animate ? 'animate-glow-pulse' : ''
        }`}
      />
    </div>
  )
}
