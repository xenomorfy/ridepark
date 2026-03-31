import type React from 'react'
import type { Stat } from '../../data/landingContent'

interface StatGridProps {
  stats: Stat[]
  className?: string
  itemClassName?: string
  numClassName?: string
  labelClassName?: string
  role?: React.AriaRole
  itemRole?: React.AriaRole
  getItemAriaLabel?: (stat: Stat) => string
  hideItemContent?: boolean
}

export function StatGrid({
  stats,
  className,
  itemClassName,
  numClassName,
  labelClassName,
  role,
  itemRole,
  getItemAriaLabel,
  hideItemContent,
}: StatGridProps) {
  return (
    <div className={className} role={role}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={itemClassName}
          role={itemRole}
          aria-label={getItemAriaLabel ? getItemAriaLabel(stat) : undefined}
        >
          <span className={numClassName} aria-hidden={hideItemContent ? 'true' : undefined}>{stat.num}</span>
          <span className={labelClassName} aria-hidden={hideItemContent ? 'true' : undefined}>{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
