'use client'

import { useRef, useCallback } from 'react'
import { heroStats } from '../data/landingContent'
import { StatGrid } from './ui/StatGrid'

const VIDEOS = ['/hero-bg.webm', '/hero-bg-1.webm', '/hero-bg-2.webm']

export function Hero() {
  const indexRef = useRef(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleEnded = useCallback(() => {
    indexRef.current = (indexRef.current + 1) % VIDEOS.length
    const video = videoRef.current
    if (!video) return
    video.src = VIDEOS[indexRef.current]
    video.play()
  }, [])

  return (
    <section className="hero" id="home">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        playsInline
        preload="none"
        onEnded={handleEnded}
      >
        <source src={VIDEOS[0]} type="video/webm" />
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
