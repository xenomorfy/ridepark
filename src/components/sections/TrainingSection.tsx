import type { ReactElement } from 'react'
import { trainingPrograms, type TrainingIconId } from '../../data/landingContent'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
import { SectionWrapper } from '../ui/SectionWrapper'
import { PersonIcon, GroupIcon, TrophyIcon } from '../icons/TrainingIcons'

const PROGRAM_ICONS: Record<TrainingIconId, ReactElement> = {
  personal: <PersonIcon />,
  group:    <GroupIcon />,
  comp:     <TrophyIcon />,
}

export function TrainingSection() {
  return (
    <SectionWrapper id="training" className="section-alt">
      <div className="training-layout">
        <div className="training-heading-block" data-reveal>
          <span className="eyebrow">Обучение</span>
          <h2>Прокачай своё мастерство</h2>
          <p>
            Сертифицированные инструкторы с многолетним опытом. Обучение
            с нуля до уровня профессионального райдера
          </p>
          <a className="btn btn-primary" href="#booking" style={{ marginTop: '2rem' }}>
            Записаться на тренировку
          </a>
        </div>

        <div className="training-right" data-reveal data-delay="150">
          <div className="training-img-wrap">
            <img
              src={`${BASE}/images/trainer.jpg`}
              alt="Главный тренер RIDEPARK"
              className="training-rider-img"
              loading="lazy"
            />
            <div className="training-rider-card">
              <p className="trainer-quote">
                «Не нужно ехать быстрее, чем летает твой ангел хранитель»
              </p>
              <div className="trainer-card-author">
                <span className="trainer-name">Андрей Толстов</span>
                <span className="trainer-role">Главный тренер · 10 лет опыта</span>
              </div>
            </div>
          </div>

          <div className="training-programs">
            {trainingPrograms.map((prog, i) => (
              <div
                className="program-card"
                key={prog.id}
                data-reveal
                data-delay={String(200 + i * 100)}
              >
                <div className="program-icon">{PROGRAM_ICONS[prog.iconId]}</div>
                <div>
                  <h3>{prog.title}</h3>
                  <p>{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
