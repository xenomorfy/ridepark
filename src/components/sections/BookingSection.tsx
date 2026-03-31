'use client'

import { useState, type FormEvent } from 'react'
import { bookingUsps, bikeCards } from '../../data/landingContent'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHead } from '../ui/SectionHead'
import { CheckList } from '../ui/CheckList'

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <SectionWrapper id="booking" className="section-alt">
      <SectionHead
        eyebrow="Бронирование"
        title="Забронируй прямо сейчас"
      />

      <div className="booking-layout">
        <div className="booking-info-box" data-reveal>
          <div>
            <p className="booking-info-heading">Быстро и удобно</p>
            <CheckList
              items={bookingUsps}
              listClassName="booking-usp-list"
              itemClassName="booking-usp-item"
            />
          </div>

          <div className="booking-contact-card">
            <span>Звонки и WhatsApp</span>
            <a href="tel:+79990000000">+7 (999) 000-00-00</a>
          </div>

          <div className="booking-contact-card">
            <span>Telegram</span>
            <a href="https://t.me/ridepark">@ridepark</a>
          </div>
        </div>

        {submitted ? (
          <div className="booking-form booking-success" data-reveal data-delay="150" role="alert">
            <p>Заявка отправлена! Мы свяжемся с вами в течение 30 минут.</p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setSubmitted(false)}
            >
              Отправить ещё одну заявку
            </button>
          </div>
        ) : (
          <form className="booking-form" data-reveal data-delay="150" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label className="form-label" htmlFor="book-vehicle">Техника</label>
              <select id="book-vehicle" name="vehicle" className="form-input" required>
                <option value="">Выберите технику</option>
                {bikeCards.map((bike) => (
                  <option key={bike.id} value={bike.id}>{bike.title}</option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="book-date">Дата</label>
              <input id="book-date" name="date" type="date" className="form-input" required />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="book-time">Время</label>
              <input id="book-time" name="time" type="time" className="form-input" required />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="book-duration">Длительность</label>
              <select id="book-duration" name="duration" className="form-input" required>
                <option value="">Выберите длительность</option>
                <option value="1h">1 час</option>
                <option value="2h">2 часа</option>
                <option value="4h">Полдня (4 ч)</option>
                <option value="day">Полный день</option>
              </select>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="book-name">Имя</label>
              <input
                id="book-name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Ваше имя"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="book-phone">Телефон</label>
              <input
                id="book-phone"
                name="phone"
                type="tel"
                className="form-input"
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>

            <div className="form-field">
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Отправить заявку
              </button>
            </div>
          </form>
        )}
      </div>
    </SectionWrapper>
  )
}
