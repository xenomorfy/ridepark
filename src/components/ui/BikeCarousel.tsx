'use client'

import { useEffect, useRef, useState } from 'react'
import { type BikeCard } from '../../data/landingContent'
import { BikeCard as BikeCardItem } from './BikeCard'

export function BikeCarousel({ bikes }: { bikes: BikeCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex]     = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const syncState = () => {
    const track = trackRef.current
    if (!track) return

    const slides    = Array.from(track.children) as HTMLElement[]
    const scrollLeft = track.scrollLeft

    let closest = 0
    let minDist = Infinity
    slides.forEach((slide, i) => {
      const dist = Math.abs(slide.offsetLeft - scrollLeft)
      if (dist < minDist) { minDist = dist; closest = i }
    })

    setActiveIndex(closest)
    setCanScrollLeft(scrollLeft > 1)
    setCanScrollRight(scrollLeft < track.scrollWidth - track.clientWidth - 1)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', syncState, { passive: true })
    return () => track.removeEventListener('scroll', syncState)
  }, [])

  const scrollToSlide = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const slide = track.children[index] as HTMLElement
    track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' })
  }

  const step = (dir: -1 | 1) => {
    scrollToSlide(Math.max(0, Math.min(bikes.length - 1, activeIndex + dir)))
  }

  return (
    <div className="bike-carousel">
      <div className="bike-carousel-track" ref={trackRef}>
        {bikes.map((bike) => (
          <div key={bike.id} className="bike-carousel-slide">
            <BikeCardItem bike={bike} />
          </div>
        ))}
      </div>

      <div className="bike-carousel-controls">
        <div className="bike-carousel-arrows">
          <button
            className="bike-carousel-btn"
            onClick={() => step(-1)}
            disabled={!canScrollLeft}
            aria-label="Предыдущий"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="bike-carousel-btn"
            onClick={() => step(1)}
            disabled={!canScrollRight}
            aria-label="Следующий"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="bike-carousel-dots">
          {bikes.map((_, i) => (
            <button
              key={i}
              className={`bike-carousel-dot${i === activeIndex ? ' is-active' : ''}`}
              onClick={() => scrollToSlide(i)}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
