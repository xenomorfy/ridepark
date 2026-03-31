import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHead } from '../ui/SectionHead'
import { MapPinIcon } from '../icons/MapPinIcon'

export function ContactsSection() {
  return (
    <SectionWrapper id="contacts">
      <SectionHead
        eyebrow="Контакты"
        title="Как нас найти"
      />

      <div className="contacts-layout">
        <div className="contacts-info" data-reveal>
          <div className="contact-block">
            <h3>Телефон</h3>
            <a href="tel:+79990000000" className="contact-link">
              +7 (999) 000-00-00
            </a>
          </div>

          <div className="contact-block">
            <h3>Мессенджеры</h3>
            <a href="https://t.me/ridepark" className="contact-link">
              Telegram: @ridepark
            </a>
            <a href="https://wa.me/79990000000" className="contact-link">
              WhatsApp: +7 (999) 000-00-00
            </a>
          </div>

          <div className="contact-block">
            <h3>Адрес</h3>
            <p className="contact-text">
              Воронежская область, г. Воронеж,
              <br />
              посёлок Белый Колодец, база RIDEPARK
            </p>
          </div>

          <div className="contact-block">
            <h3>Режим работы</h3>
            <p className="contact-text">
              Пн–Пт: 10:00 – 20:00
              <br />
              Сб–Вс: 09:00 – 21:00
            </p>
          </div>

          <a className="btn btn-primary" href="#booking">
            Забронировать
          </a>
        </div>

        <div className="map-placeholder" data-reveal data-delay="200">
          <MapPinIcon />
          <span>Карта загружается</span>
        </div>
      </div>
    </SectionWrapper>
  )
}
