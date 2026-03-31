import { priceTiers } from '../../data/landingContent'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHead } from '../ui/SectionHead'
import { CheckList } from '../ui/CheckList'

export function PricesSection() {
  return (
    <SectionWrapper id="prices" className="section-alt has-bg-enduro" style={{ '--bg-image': `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/enduro.png)` }}>
      <SectionHead
        eyebrow="Тарифы"
        title="Прозрачное ценообразование"
        subtitle="Никаких скрытых платежей — только то, что указано в тарифе"
      />

      <div className="prices-grid">
        {priceTiers.map((tier, i) => (
          <div
            className={`price-card${tier.featured ? ' featured' : ''}`}
            key={tier.id}
            data-reveal
            data-delay={String(i * 150)}
          >
            {tier.badge && (
              <span className="price-featured-badge">{tier.badge}</span>
            )}

            <h3>{tier.title}</h3>

            <div>
              <span className="price-amount">
                {tier.amount}
                <span className="price-period">₽{tier.period}</span>
              </span>
            </div>

            <p className="price-desc">{tier.desc}</p>

            <CheckList
              items={tier.items}
              listClassName="price-list"
              itemClassName="price-list-item"
            />

            <a
              className={`btn btn-lg${tier.featured ? ' btn-primary' : ' btn-secondary'}`}
              href="#booking"
              style={{ marginTop: 'auto' }}
            >
              Выбрать тариф
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
