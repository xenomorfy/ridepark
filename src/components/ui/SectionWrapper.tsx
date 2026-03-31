import type React from 'react'

interface SectionWrapperProps {
  id: string
  className?: string
  style?: React.CSSProperties & { [key: `--${string}`]: string }
  children: React.ReactNode
  'aria-label'?: string
  'aria-roledescription'?: string
}

export function SectionWrapper({
  id,
  className,
  style,
  children,
  'aria-label': ariaLabel,
  'aria-roledescription': ariaRoledescription,
}: SectionWrapperProps) {
  return (
    <section
      className={`section${className ? ` ${className}` : ''}`}
      id={id}
      style={style}
      aria-label={ariaLabel}
      aria-roledescription={ariaRoledescription}
    >
      <div className="container">
        {children}
      </div>
    </section>
  )
}
