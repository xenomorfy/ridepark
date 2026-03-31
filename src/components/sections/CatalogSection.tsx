import { bikeCards } from '../../data/landingContent'
import { SectionWrapper } from '../ui/SectionWrapper'
import { BikeCarousel } from '../ui/BikeCarousel'

export function CatalogSection() {
  if (!bikeCards.length) return null

  return (
    <SectionWrapper
      id="catalog"
      className="section-alt"
      aria-label="Парк техники"
    >
      <div className="catalog-header" data-reveal>
        <div>
          <span className="eyebrow">Парк техники</span>
          <h2>Выбери своего коня</h2>
          <p className="catalog-header-desc">
            Исправная техника с полным обслуживанием. Шлемы, защита и
            экипировка предоставляются при каждом прокате
          </p>
        </div>
      </div>

      <div data-reveal>
        <BikeCarousel bikes={bikeCards} />
      </div>
    </SectionWrapper>
  )
}
