import content from '../content.yaml'
import CareCard from './CareCard'
import SectionTitle from './SectionTitle'

function CareGuide() {
  return (
    <section className="section care" id="care">
      <div className="section-heading">
        <div>
          <SectionTitle
            label="The important stuff"
            title={content.care.heading}
          />
        </div>
        <p>{content.care.description}</p>
      </div>
      <div className="care-grid">
        {content.care.cards.map((card) => (
          <CareCard card={card} key={card.title} />
        ))}
      </div>
    </section>
  )
}

export default CareGuide
