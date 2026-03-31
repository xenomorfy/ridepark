import { heroStats } from '../data/landingContent'
import { StatGrid } from './ui/StatGrid'

export function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-inner">
        <span className="eyebrow hero-eyebrow">Прокат мотоциклов и квадроциклов</span>
        <h1 className="hero-title">
          RIDE<span className="hero-title-accent">PARK</span>
        </h1>
        <p className="hero-tagline">
          Трассы, техника и инструкторы — всё для незабываемых выездов
          <br />
          любого уровня подготовки
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary btn-lg" href="#booking">
            Забронировать
          </a>
          <a className="btn btn-ghost btn-lg" href="#catalog">
            Смотреть технику
          </a>
        </div>
      </div>

      <StatGrid
        stats={heroStats}
        className="hero-stats"
        itemClassName="hero-stat"
        numClassName="hero-stat-num"
        labelClassName="hero-stat-label"
        role="list"
        itemRole="listitem"
        getItemAriaLabel={(stat) => `${stat.num} ${stat.label}`}
        hideItemContent
      />

      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span>↓</span>
      </div>
    </section>
  )
}
