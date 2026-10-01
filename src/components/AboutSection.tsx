import content from '../content.yaml'
import SectionTitle from './SectionTitle'

function AboutSection() {
  return (
    <section className="section about" id="about">
      <div>
        <SectionTitle
          label="A little about me"
          title={content.about.heading}
        />
      </div>
      <div className="about-copy">
        <p>{content.about.description}</p>
        <ul className="traits" aria-label="Behavior and training">
          {content.about.traits.map((trait) => (
            <li key={trait}>
              <span aria-hidden="true">✓</span>
              <span>{trait}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutSection
