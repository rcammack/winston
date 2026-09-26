import content from '../content.yaml'
import SectionTitle from './SectionTitle'

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div>
        <SectionTitle
          label="Questions or updates?"
          title={content.contact.heading}
        />
        <p>{content.contact.description}</p>
      </div>
      <div className="contact-links">
        <a
          className="contact-detail"
          href={`tel:${content.contact.veterinarian.phone_link}`}
        >
          <span>{content.contact.veterinarian.label}</span>
          <strong>{content.contact.veterinarian.name}</strong>
          <small>{content.contact.veterinarian.address}</small>
          <small>{content.contact.veterinarian.phone_display}</small>
        </a>
      </div>
    </section>
  )
}

export default ContactSection
