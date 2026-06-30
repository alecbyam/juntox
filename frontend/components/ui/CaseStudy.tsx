type Metric = { value: string; label: string }

type Props = {
  tag: string
  title: string
  description: string
  metrics: Metric[]
}

export function CaseStudy({ tag, title, description, metrics }: Props) {
  return (
    <div className="card-gradient-border">
      <span className="text-overline font-bold text-primary-light">{tag}</span>
      <h3 className="mt-4 font-serif text-heading-3 font-semibold text-white">{title}</h3>
      <p className="mt-4 text-body text-neutral-400">{description}</p>
      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/[0.05] pt-6">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className="font-serif text-heading-3 font-semibold text-gradient-warm">{metric.value}</p>
            <p className="mt-1 text-caption text-neutral-500">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
