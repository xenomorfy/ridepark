import type { ReactElement } from 'react'
import { previewSections } from '../../data/landingContent'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHead } from '../ui/SectionHead'
import { PhotoIcon } from '../icons/PhotoIcon'

const SERVICE_ICONS: Record<string, ReactElement> = {
  catalog: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 3l-4 4-4-4" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  ),
  tracks: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12c0-4.4 3.6-8 8-8" />
      <path d="M21 12c0 4.4-3.6 8-8 8" />
      <path d="M9 8l3 4 3-2 3 4" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="17" cy="5" r="2" />
    </svg>
  ),
  training: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  events: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  gallery: <PhotoIcon />,
  reviews: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
}

export function PreviewSection() {
  return (
    <SectionWrapper id="preview" className="has-bg-rider-2">
      <SectionHead
        eyebrow="Что мы предлагаем"
        title="Всё для идеальной поездки"
        subtitle="От первого выезда до профессиональных соревнований — у нас есть всё что нужно для вашего мотоприключения"
      />

      <div className="services-grid">
        {previewSections.map((item, i) => (
          <a
            key={item.id}
            href={item.href}
            className="service-tile"
            data-reveal
            data-delay={String((i % 3) * 100)}
          >
            <span className="service-icon">
              {SERVICE_ICONS[item.id] ?? null}
            </span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </a>
        ))}
      </div>
    </SectionWrapper>
  )
}
