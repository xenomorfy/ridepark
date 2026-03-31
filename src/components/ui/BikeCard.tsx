import Image from 'next/image'
import { type BikeCard } from '../../data/landingContent'

export function BikeCard({ bike }: { bike: BikeCard }) {
  return (
    <article className="bike-card">
      <div className="bike-card-img" style={{ position: 'relative' }}>
        <Image
          src={bike.category === 'Квадроцикл' ? '/images/quad.png' : '/images/bike.png'}
          alt={bike.title}
          className="bike-photo"
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 48vw, 31vw"
        />
        {bike.badge && <span className="bike-badge">{bike.badge}</span>}
      </div>

      <div className="bike-card-body">
        <p className="bike-kicker">{bike.category} · {bike.level}</p>
        <h3>{bike.title}</h3>
        <p>{bike.desc}</p>

        <div className="bike-specs">
          <div className="spec-item">
            <span className="spec-label">Мощность</span>
            <span className="spec-value">{bike.power}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Вес</span>
            <span className="spec-value">{bike.weight}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Объём</span>
            <span className="spec-value">{bike.engine}</span>
          </div>
        </div>

        <div className="bike-price-row">
          <div>
            <div className="bike-price-main">
              {bike.priceHour}
              <span style={{ fontSize: '0.9rem', color: 'var(--text-3)' }}>/час</span>
            </div>
            <div className="bike-price-day">{bike.priceDay}</div>
          </div>
          <a className="btn btn-primary btn-sm" href="#booking">Забронировать</a>
        </div>
      </div>
    </article>
  )
}
