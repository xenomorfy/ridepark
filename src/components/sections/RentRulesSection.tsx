import { rentRules, rentIncluded } from '../../data/landingContent'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHead } from '../ui/SectionHead'
import { CheckList } from '../ui/CheckList'

export function RentRulesSection() {
  return (
    <SectionWrapper id="rent-rules" className="has-bg-gear" style={{ '--bg-image': `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/gear.png)` }}>
      <SectionHead
        eyebrow="Аренда"
        title="Условия проката"
      />

      <div className="rules-layout">
        <div className="rules-list">
          {rentRules.map((rule, i) => (
            <div
              className="rule-item"
              key={rule.num}
              data-reveal
              data-delay={String(i * 100)}
            >
              <span className="rule-num">{rule.num}</span>
              <div className="rule-text">
                <h3>{rule.title}</h3>
                <p>{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rules-box" data-reveal data-delay="200">
          <h3>Что включено в стоимость</h3>
          <CheckList
            items={rentIncluded}
            listClassName="included-list"
            itemClassName="included-item"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
