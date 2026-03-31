import { aboutStats } from '../../data/landingContent'
import { SectionWrapper } from '../ui/SectionWrapper'
import { StatGrid } from '../ui/StatGrid'

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="section-last">
      <div className="about-layout">
        <div className="about-text" data-reveal>
          <span className="eyebrow">О нас</span>
          <h2>Твоё место для настоящего мото</h2>
          <p>
            Мы проводим прокат, тренировки и выезды с акцентом на безопасность.
            Команда профессиональных инструкторов, проверенная и обслуженная техника,
            маршруты под любой уровень.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            За семь лет работы мы помогли более 1500 клиентам открыть для себя мир
            эндуро и квадро-приключений — от первого выезда до старта на соревнованиях.
          </p>
          <a className="btn btn-primary" href="#booking" style={{ marginTop: '2rem' }}>
            Начать приключение
          </a>
        </div>

        <div data-reveal data-delay="200">
          <StatGrid
            stats={aboutStats}
            className="about-stats"
            itemClassName="about-stat-item"
            numClassName="about-stat-num"
            labelClassName="about-stat-label"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
