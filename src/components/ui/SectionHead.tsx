interface SectionHeadProps {
  eyebrow: string
  title: string
  subtitle?: string
}

export function SectionHead({ eyebrow, title, subtitle }: SectionHeadProps) {
  return (
    <div className="section-head" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}
