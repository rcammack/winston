import { useState } from 'react'
import './App.css'

const birthday = new Date(2025, 1, 23)

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

const quickFacts = [
  ['Age', getAge(birthday)],
  ['Weight', '13 lbs'],
  ['Potty breaks', 'Every 4–5 hours'],
  ['Training', 'Crate & house trained'],
  ['Neutered', 'Yes'],
  ['Microchipped', 'Yes'],
]

const careCards = [
  {
    icon: '🥣',
    title: 'Meals',
    text: 'Feed 1/4 cup of kibble twice a day—once in the morning and once in the evening.',
  },
  {
    icon: '🚫',
    title: 'Elimination diet',
    text: 'No chicken, beef, lamb, dairy, or wheat, including in treats. He is on an elimination diet because he has been itchy and licking his paws.',
    important: true,
  },
  {
    icon: '🦮',
    title: 'Potty breaks',
    text: 'Take him out every 4–5 hours. He does not whine or otherwise signal when he needs to pee, so do not wait for him to ask.',
    important: true,
  },
  {
    icon: '🏠',
    title: 'House training',
    text: 'He is house trained, but fuzzy carpet may confuse him. If another dog has peed indoors, he may try to mark that spot.',
  },
  {
    icon: '💤',
    title: 'Crate routine',
    text: 'He sleeps in his crate overnight. He also takes a 2–3 hour crate nap around 5–7 PM, or after his evening walk.',
  },
  {
    icon: '🚪',
    title: 'Separation anxiety',
    text: 'He has separation anxiety. His daily evening crate nap is his trained window for being home alone while you run errands, eat out, or work out.',
  },
  {
    icon: '🐕',
    title: 'Other dogs',
    text: 'He is friendly with most dogs and may bark from excitement, but do not let him play with them. Avoid on-leash greetings because the hands-free leash tangles easily.',
  },
  {
    icon: '🦺',
    title: 'Harness only',
    text: 'Never use a collar. His breed mix is prone to collapsed trachea, so always attach his leash to a harness.',
    important: true,
  },
  {
    icon: '👟',
    title: 'Overexcitement on walks',
    text: 'When he gets too excited or exhausted during a walk, he may attack shoes, slippers, or feet—especially while crossing the street. Watch for overstimulation and keep crossings controlled.',
    important: true,
  },
  {
    icon: '👧',
    title: 'Children & cats',
    text: 'He loves children and regularly sees a 3-year-old, but can get too excited around them. His behavior with cats is unknown because he has never been introduced to one.',
  },
  {
    icon: '🧻',
    title: 'Resource guarding',
    text: 'He may guard stolen items such as used tissues. Read his body language and do not take things away unless it is an emergency. Prevent access and use “drop it” or “leave it.”',
    important: true,
  },
  {
    icon: '⚠️',
    title: 'Pain response',
    text: 'His default response to pain, including being accidentally stepped on, is to growl rather than whine. Give him space and pay attention to his body language.',
    important: true,
  },
  {
    icon: '🚗',
    title: 'Car rides',
    text: 'Always put him in the back seat and secure him with his seat belt.',
  },
]

const communicationCommands = [
  {
    name: 'Sit',
    use: 'Use when Winston needs to pause and focus before the next instruction.',
  },
  {
    name: 'Stay',
    use: 'Use when Winston needs to remain in place until he is released.',
  },
  {
    name: 'Down',
    use: 'Use when you want Winston to lie down and settle.',
  },
  {
    name: 'Leave it',
    use: 'Use before he picks up or approaches something he should not have. This is preferable to taking an item away.',
  },
  {
    name: 'Drop it',
    use: 'Use after he has something in his mouth. Give the cue instead of reaching for the item; only take it directly in an emergency.',
  },
]

const trickCommands = [
  {
    name: 'Shake',
    use: 'A just-for-fun paw shake.',
  },
  {
    name: 'Spin',
    use: 'A just-for-fun turn in a circle.',
  },
]

const galleryPhotos = [
  {
    src: 'gallery/puppy-soccer.jpg',
    alt: 'Winston as a puppy sitting in the grass with a soccer ball',
  },
  {
    src: 'gallery/beach-sunset.jpg',
    alt: 'Winston sitting on a tree stump at the beach at sunset',
  },
  {
    src: 'gallery/toy-drumstick.jpg',
    alt: 'Winston holding a toy drumstick',
  },
  {
    src: 'gallery/dog-friend.jpg',
    alt: 'Winston sitting in the grass beside another dog',
  },
  {
    src: 'gallery/birthday.jpg',
    alt: 'Winston wearing a birthday hat behind his birthday dinner',
  },
  {
    src: 'gallery/halloween.jpg',
    alt: 'Winston dressed as a witch for Halloween',
  },
  {
    src: 'gallery/outdoor-closeup.jpg',
    alt: 'A close-up of Winston smiling outside',
  },
  {
    src: 'gallery/christmas.jpg',
    alt: 'Winston wearing a Christmas tree hat',
  },
  {
    src: 'gallery/puppy-beanie.jpg',
    alt: 'Winston as a puppy wearing a tiny beanie',
  },
  {
    src: 'gallery/portrait.jpg',
    alt: 'A portrait of Winston smiling',
  },
]

type Command = (typeof communicationCommands)[number]
type GalleryPhoto = (typeof galleryPhotos)[number]

function App() {
  const [hoveredCommand, setHoveredCommand] = useState<Command | null>(null)
  const [selectedCommand, setSelectedCommand] = useState<Command>(
    communicationCommands[0],
  )
  const [openPhoto, setOpenPhoto] = useState<GalleryPhoto | null>(null)
  const visibleCommand = hoveredCommand ?? selectedCommand

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
        <a className="brand" href="#top" aria-label="Winston home">
          <span aria-hidden="true">🐾</span> Winston
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
              Hi, I’m <span>Winston.</span>
            </h1>
            <p className="hero-intro">
              My owner is a crazy dog mom who made this website for me. Looking
              for a kind sitter who will keep my tail wagging.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#care">
                Read my care guide
              </a>
              <a className="button secondary" href="#contact">
                Contact my humans
              </a>
            </div>
          </div>
          <div className="portrait" aria-label="Winston, a happy dog" role="img">
            <img
              className="portrait-photo"
              src={`${import.meta.env.BASE_URL}winston.png`}
              alt=""
            />
            <span className="portrait-tag" aria-hidden="true">W</span>
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
            <h2>Easygoing, curious, and always up for company.</h2>
          </div>
          <div className="about-copy">
            <p>
              Winston is a friendly, medium-energy mix of Miniature Poodle,
              Pomeranian, Papillon, and Bichon Frise. He loves fetch and happily
              accepts pets from anyone, including strangers. His excitement can
              come out as barking or overly enthusiastic behavior, so calm,
              attentive handling helps him feel secure.
            </p>
            <ul className="traits" aria-label="Behavior and training">
              <li>✓ Loves fetch</li>
              <li>✓ House trained</li>
              <li>✓ Knows drop it & leave it</li>
              <li>✓ Crate trained</li>
              <li>✓ Neutered</li>
              <li>✓ Microchipped</li>
            </ul>
          </div>
        </section>

        <section className="section care" id="care">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The important stuff</p>
              <h2>Winston’s care guide</h2>
            </div>
            <p>Everything you need for a happy, low-stress stay.</p>
          </div>
          <div className="care-grid">
            {careCards.map((card) => (
              <article className={card.important ? 'care-card important' : 'care-card'} key={card.title}>
                <span className="card-icon" aria-hidden="true">{card.icon}</span>
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
            <p className="eyebrow">Words Winston knows</p>
            <h2>Communicating with Winston</h2>
            <p>
              Here are Winston’s most useful commands, including the exact
              phrase and hand signal to use. Hover or click a command to see
              more details.
            </p>
          </div>
          <div className="command-panel">
            <div className="command-group">
              <h3>Useful commands</h3>
              <div className="skill-list" aria-label="Useful commands for Winston">
                {communicationCommands.map(renderCommand)}
              </div>
            </div>
            <div className="command-group">
              <h3>Tricks for treats</h3>
              <div className="skill-list" aria-label="Winston's tricks">
                {trickCommands.map(renderCommand)}
              </div>
            </div>
            <div className="command-detail" role="status">
              <span>How to use “{visibleCommand.name}”</span>
              <strong>{visibleCommand.use}</strong>
            </div>
          </div>
        </section>

        <section className="photo-section" aria-labelledby="photos-title">
          <div className="photo-heading">
            <div>
              <p className="eyebrow">A little more Winston</p>
              <h2 id="photos-title">Favorite photos</h2>
            </div>
            <span>Swipe to see more →</span>
          </div>
          <div className="photo-strip">
            {galleryPhotos.map((photo) => (
              <button
                className="photo-tile"
                type="button"
                key={photo.src}
                aria-label={`Open ${photo.alt}`}
                onClick={() => setOpenPhoto(photo)}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${photo.src}`}
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
            <h2>Important contact information</h2>
            <p>
              For an emergency, contact Winston’s owner using the details
              provided for his stay, then contact his vet if needed.
            </p>
          </div>
          <div className="contact-links">
            <a className="contact-detail" href="tel:+18084271000">
              <span>Veterinarian</span>
              <strong>Oahu Veterinary Clinic</strong>
              <small>1347 Kapiolani Blvd, Suite 101, Honolulu, HI 96814</small>
              <small>(808) 427-1000</small>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>Made with lots of treats for Winston.</span>
        <a href="#top">Back to top ↑</a>
      </footer>

      {openPhoto && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={openPhoto.alt}
          onClick={() => setOpenPhoto(null)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setOpenPhoto(null)
          }}
        >
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button
              className="lightbox-close"
              type="button"
              aria-label="Close photo"
              autoFocus
              onClick={() => setOpenPhoto(null)}
            >
              ×
            </button>
            <img
              src={`${import.meta.env.BASE_URL}${openPhoto.src}`}
              alt={openPhoto.alt}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default App
