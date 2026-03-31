import { tracks } from '../../data/landingContent'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHead } from '../ui/SectionHead'

export function TracksSection() {
  return (
    <SectionWrapper id="tracks" className="has-bg-quad-action">
      <SectionHead
        eyebrow="Маршруты"
        title="Три трассы для трёх уровней"
        subtitle="Каждый маршрут спроектирован для определённого уровня подготовки. Карты, описание и фото по каждой локации"
      />

      <div className="tracks-grid">
        {tracks.map((track, i) => (
          <article
            className={`track-card ${track.diffClass}`}
            key={track.id}
            data-reveal
            data-delay={String(i * 150)}
          >
            <div className="track-card-top" />
            <div className="track-card-body">
              <span className="track-diff-badge">{track.difficulty}</span>
              <h3>{track.title}</h3>
              <div className="track-meta">
                <div className="track-meta-item">
                  <span className="track-meta-label">Длина</span>
                  <span className="track-meta-value">{track.length}</span>
                </div>
                <div className="track-meta-item">
                  <span className="track-meta-label">Время</span>
                  <span className="track-meta-value">{track.time}</span>
                </div>
              </div>
              <p>{track.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
