import { reviews } from '../../data/landingContent'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHead } from '../ui/SectionHead'
import { StarIcon } from '../icons/StarIcon'

export function ReviewsSection() {
  return (
    <SectionWrapper id="reviews">
      <SectionHead
        eyebrow="Отзывы"
        title="Что говорят райдеры"
      />

      <div className="reviews-grid">
        {reviews.map((review, i) => (
          <article
            className="review-card"
            key={review.id}
            data-reveal
            data-delay={String(i * 150)}
          >
            <div className="review-stars" aria-label={`${review.stars} из 5 звёзд`}>
              {Array.from({ length: review.stars }).map((_, idx) => (
                <StarIcon key={idx} />
              ))}
            </div>

            <p className="review-text">{review.text}</p>

            <div className="review-author">
              <div className="review-avatar" aria-hidden="true">{review.avatar}</div>
              <div className="review-author-info">
                <h3>{review.name}</h3>
                <span>{review.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
