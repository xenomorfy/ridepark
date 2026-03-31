import { type BikeCard } from '../../data/landingContent'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function BikeCard({ bike }: { bike: BikeCard }) {
  return (
    <article className="bike-card">
      <div className="bike-card-img">
        <img
          src={`${BASE}${bike.category === 'Квадроцикл' ? '/images/quad.png' : '/images/bike.png'}`}
          alt={bike.title}
          className="bike-photo"
          loading="lazy"
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
