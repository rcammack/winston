import './App.css'

const quickFacts = [
  ['Age', '4 years'],
  ['Weight', '42 lbs'],
  ['Potty breaks', 'Every 4–6 hours'],
  ['Training', 'Crate & house trained'],
]

const careCards = [
  {
    icon: '🥣',
    title: 'Meals',
    text: '1 cup of dry food at 7 AM and 6 PM. Please keep fresh water available all day.',
  },
  {
    icon: '🦴',
    title: 'Allergies',
    text: 'Chicken is off-limits. Check treat labels and stick to the packed snacks.',
    important: true,
  },
  {
    icon: '🦮',
    title: 'Walks & potty',
    text: 'A morning and evening walk, plus a potty break every 4–6 hours. His last call is at 10 PM.',
  },
  {
    icon: '🌙',
    title: 'Bedtime',
    text: 'Winston sleeps in his crate overnight. His blanket and a small treat help him settle in.',
  },
]

function App() {
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
              Treat enthusiast, neighborhood explorer, and champion napper looking
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
            <span className="portrait-ears" aria-hidden="true">⌒</span>
            <span className="portrait-face" aria-hidden="true">🐶</span>
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
              Winston is a friendly, medium-energy pup. He may be a little shy
              when you first arrive, but a treat and a calm hello win him over
              quickly. Once you’re friends, expect cuddles and a loyal shadow.
            </p>
            <ul className="traits" aria-label="Behavior and training">
              <li>✓ Friendly with dogs</li>
              <li>✓ Calm homebody</li>
              <li>✓ Walks well on leash</li>
              <li>✓ Crate trained</li>
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

        <section className="section skills">
          <div>
            <p className="eyebrow">Special skills</p>
            <h2>Tricks for treats</h2>
            <p>Say the word once, show him the treat, and prepare to be impressed.</p>
          </div>
          <div className="skill-list" aria-label="Winston's tricks">
            {['Sit', 'Stay', 'Down', 'Shake', 'Spin', 'Leave it'].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <p className="eyebrow">Questions or updates?</p>
            <h2>Contact Winston’s humans</h2>
            <p>
              Please reach out anytime. For an emergency, call first and then
              contact the vet listed in Winston’s printed care folder.
            </p>
          </div>
          <div className="contact-links">
            <a href="tel:+15550142774">
              <span>Call or text</span>
              <strong>(555) 014-2774</strong>
            </a>
            <a href="mailto:hello@winstonthedog.com">
              <span>Email</span>
              <strong>hello@winstonthedog.com</strong>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>Made with lots of treats for Winston.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
