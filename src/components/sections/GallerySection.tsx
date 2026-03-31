import { galleryItems } from '../../data/landingContent'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHead } from '../ui/SectionHead'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function GallerySection() {
  return (
    <SectionWrapper id="gallery" className="section-alt">
      <SectionHead
        eyebrow="Галерея"
        title="Моменты с трасс"
        subtitle="Фото и видео с наших выездов, соревнований и тренировок"
      />

      <div className="gallery-grid" data-reveal>
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`gallery-item ${item.cls}`}
          >
            <img src={`${BASE}${item.src}`} alt={item.label} loading="lazy" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
