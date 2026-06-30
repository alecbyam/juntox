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

const sizes = {
  sm: 'h-[200px] w-[300px] blur-[100px]',
  md: 'h-[350px] w-[500px] blur-[120px]',
  lg: 'h-[500px] w-[700px] blur-[140px]',
  xl: 'h-[600px] w-[900px] blur-[160px]',
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
