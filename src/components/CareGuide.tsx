import content from '../content.yaml'
import CareGroup from './CareGroup'
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
      <div className="care-groups">
        {content.care.groups.map((group) => (
          <CareGroup group={group} key={group.heading} />
        ))}
      </div>
    </section>
  )
}

export default CareGuide
