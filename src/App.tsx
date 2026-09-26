import { useEffect, useRef, useState } from 'react'
import './App.css'
import content from './content.yaml'

function getAge(birthDate: Date) {
  const today = new Date()
  let years = today.getFullYear() - birthDate.getFullYear()
  let months = today.getMonth() - birthDate.getMonth()

  if (today.getDate() < birthDate.getDate()) {
    months -= 1
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  const yearLabel = `${years} ${years === 1 ? 'year' : 'years'}`
  const monthLabel = `${months} ${months === 1 ? 'month' : 'months'}`

  if (years === 0) return monthLabel
  if (months === 0) return yearLabel
  return `${yearLabel}, ${monthLabel}`
}

const quickFacts = content.profile.map((fact) => {
  if (!fact.calculate_age) return [fact.title, fact.value]

  const [year, month, day] = fact.value.split('-').map(Number)
  return [fact.title, getAge(new Date(year, month - 1, day))]
})

const careCards = content.care.cards
const communicationCommands = content.commands.useful
const trickCommands = content.commands.tricks
const galleryPhotos = content.photos.items

type Command = (typeof communicationCommands)[number]
type GalleryPhoto = (typeof galleryPhotos)[number]

function App() {
  const [hoveredCommand, setHoveredCommand] = useState<Command | null>(null)
  const [selectedCommand, setSelectedCommand] = useState<Command>(
    communicationCommands[0],
  )
  const [openPhoto, setOpenPhoto] = useState<GalleryPhoto | null>(null)
  const lightboxRef = useRef<HTMLDialogElement>(null)
  const lastPhotoTriggerRef = useRef<HTMLButtonElement | null>(null)
  const usefulCommandsRef = useRef<HTMLDivElement>(null)
  const trickCommandsRef = useRef<HTMLDivElement>(null)
  const visibleCommand = hoveredCommand ?? selectedCommand

  useEffect(() => {
    if (openPhoto && !lightboxRef.current?.open) {
      lightboxRef.current?.showModal()
    }
  }, [openPhoto])

  const closePhoto = () => {
    lightboxRef.current?.close()
  }

  const scrollCommandList = (
    list: HTMLDivElement | null,
    direction: -1 | 1,
  ) => {
    list?.scrollBy({
      left: direction * 220,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })
  }

  const renderCommand = (command: Command) => {
    const isSelected = selectedCommand?.name === command.name

    return (
      <button
        type="button"
        key={command.name}
        aria-pressed={isSelected}
        onBlur={() => setHoveredCommand(null)}
        onClick={() => {
          setHoveredCommand(null)
          setSelectedCommand(command)
        }}
        onFocus={() => setHoveredCommand(command)}
        onMouseEnter={() => setHoveredCommand(command)}
        onMouseLeave={() => setHoveredCommand(null)}
      >
        {command.name}
      </button>
    )
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${content.site.brand} home`}>
          <span aria-hidden="true">🐾</span> {content.site.brand}
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#care">Care guide</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Professional good boy</p>
            <h1 id="hero-title">
              {content.hero.greeting}{' '}
              <span className="hero-name">{content.hero.name}</span>
            </h1>
            <p className="hero-intro">{content.hero.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#care">
                {content.hero.care_button}
              </a>
              <a className="button secondary" href="#contact">
                {content.hero.contact_button}
              </a>
            </div>
          </div>
          <div
            className="portrait"
            aria-label={content.hero.image_description}
            role="img"
          >
            <img
              className="portrait-photo"
              src={`${import.meta.env.BASE_URL}${content.hero.image}`}
              alt=""
            />
          </div>
        </section>

        <section className="quick-facts" aria-label="Winston at a glance">
          {quickFacts.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </section>

        <section className="section about" id="about">
          <div>
            <p className="eyebrow">A little about me</p>
            <h2>{content.about.heading}</h2>
          </div>
          <div className="about-copy">
            <p>{content.about.description}</p>
            <ul className="traits" aria-label="Behavior and training">
              {content.about.traits.map((trait) => (
                <li key={trait}>✓ {trait}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section care" id="care">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The important stuff</p>
              <h2>{content.care.heading}</h2>
            </div>
            <p>{content.care.description}</p>
          </div>
          <div className="care-grid">
            {careCards.map((card) => (
              <article className="care-card" key={card.title}>
                <span className="card-visual" aria-hidden="true">
                  {card.image ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${card.image}`}
                      alt=""
                    />
                  ) : card.emoji}
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section skills"
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setHoveredCommand(null)
              setSelectedCommand(communicationCommands[0])
            }
          }}
        >
          <div>
            <p className="eyebrow">Commands Winston knows</p>
            <h2>{content.commands.heading}</h2>
            <p>{content.commands.description}</p>
          </div>
          <div className="command-panel">
            <div className="command-group">
              <h3>Useful commands</h3>
              <div className="scrolling-skill-list">
                <button
                  className="scroll-button"
                  type="button"
                  aria-label="Scroll useful commands left"
                  onClick={() => scrollCommandList(usefulCommandsRef.current, -1)}
                >
                  ←
                </button>
                <div
                  className="skill-list"
                  aria-label="Useful commands for Winston"
                  ref={usefulCommandsRef}
                >
                  {communicationCommands.map(renderCommand)}
                </div>
                <button
                  className="scroll-button"
                  type="button"
                  aria-label="Scroll useful commands right"
                  onClick={() => scrollCommandList(usefulCommandsRef.current, 1)}
                >
                  →
                </button>
              </div>
            </div>
            <div className="command-group">
              <h3>Tricks for treats</h3>
              <div className="scrolling-skill-list">
                <button
                  className="scroll-button"
                  type="button"
                  aria-label="Scroll tricks left"
                  onClick={() => scrollCommandList(trickCommandsRef.current, -1)}
                >
                  ←
                </button>
                <div
                  className="skill-list"
                  aria-label="Winston's tricks"
                  ref={trickCommandsRef}
                >
                  {trickCommands.map(renderCommand)}
                </div>
                <button
                  className="scroll-button"
                  type="button"
                  aria-label="Scroll tricks right"
                  onClick={() => scrollCommandList(trickCommandsRef.current, 1)}
                >
                  →
                </button>
              </div>
            </div>
            <div className="command-detail" role="status">
              <span>{content.commands.detail_prefix} “{visibleCommand.name}”</span>
              <strong>{visibleCommand.details}</strong>
            </div>
            <div className="other-words">
              <h3>Other words Winston knows</h3>
              <p>{content.commands.other_words}</p>
            </div>
          </div>
        </section>

        <section className="photo-section" aria-labelledby="photos-title">
          <div className="photo-heading">
            <div>
              <p className="eyebrow">A little more Winston</p>
              <h2 id="photos-title">{content.photos.heading}</h2>
            </div>
            <span>{content.photos.swipe_text}</span>
          </div>
          <div className="photo-strip">
            {galleryPhotos.map((photo) => (
              <button
                className="photo-tile"
                type="button"
                key={photo.file}
                aria-label={`Open ${photo.description}`}
                onClick={(event) => {
                  lastPhotoTriggerRef.current = event.currentTarget
                  setOpenPhoto(photo)
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${photo.file}`}
                  alt=""
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <p className="eyebrow">Questions or updates?</p>
            <h2>{content.contact.heading}</h2>
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
      </main>

      <footer>
        <span>{content.footer.message}</span>
        <a href="#top">Back to top ↑</a>
      </footer>

      <dialog
        className="lightbox"
        ref={lightboxRef}
        aria-label={openPhoto?.description ?? content.photos.heading}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePhoto()
        }}
        onClose={() => {
          setOpenPhoto(null)
          requestAnimationFrame(() => lastPhotoTriggerRef.current?.focus())
        }}
      >
        {openPhoto && (
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              type="button"
              aria-label="Close photo"
              autoFocus
              onClick={closePhoto}
            >
              ×
            </button>
            <img
              src={`${import.meta.env.BASE_URL}${openPhoto.file}`}
              alt={openPhoto.description}
            />
          </div>
        )}
      </dialog>
    </>
  )
}

export default App
