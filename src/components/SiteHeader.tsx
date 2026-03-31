'use client'

import { useState } from 'react'
import { useOnHero } from '../hooks/useOnHero'
import { menuLinks } from '../data/landingContent'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isOnHero = useOnHero('home')

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className={`site-header ${isOnHero && !isMenuOpen ? 'is-hero' : 'is-solid'}`}>
        <div className="header-inner">
          <a href="#home" className="header-brand">
            RIDE<span>PARK</span>
          </a>

          <nav className="header-nav" aria-label="Основная навигация">
            {menuLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="#booking" className="btn btn-primary btn-sm header-book">
              Забронировать
            </a>
            <button
              type="button"
              className={`burger-btn${isMenuOpen ? ' is-open' : ''}`}
              aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-nav-overlay" id="mobile-nav" role="dialog" aria-label="Мобильная навигация">
          <nav className="mobile-nav">
            {menuLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            className="btn btn-primary btn-lg"
            style={{ marginTop: '2rem', alignSelf: 'flex-start' }}
            onClick={closeMenu}
          >
            Забронировать
          </a>
        </div>
      )}
    </>
  )
}
