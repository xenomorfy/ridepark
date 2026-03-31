import Image from 'next/image'
import { galleryItems } from '../../data/landingContent'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHead } from '../ui/SectionHead'

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
            <Image src={item.src} alt={item.label} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
