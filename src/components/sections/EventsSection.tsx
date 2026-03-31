import { events } from '../../data/landingContent'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHead } from '../ui/SectionHead'

export function EventsSection() {
  return (
    <SectionWrapper id="events" className="has-bg-helmet">
      <SectionHead
        eyebrow="Календарь"
        title="События 2026"
        subtitle="Открытые соревнования, фестивали и марафоны на протяжении всего сезона. Регистрация, результаты и фотоотчёты"
      />

      <div className="events-grid">
        {events.map((event, i) => (
          <article
            className="event-card"
            key={event.id}
            data-reveal
            data-delay={String(i * 150)}
          >
            <time className="event-date-badge" dateTime={event.isoDate}>
              <div className="event-date-day">{event.day}</div>
              <div className="event-date-month">{event.month}</div>
            </time>

            <div className="event-card-content">
              <span className="event-cat-chip">{event.category}</span>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
