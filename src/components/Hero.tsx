import content from '../content.yaml'

function Hero() {
  return (
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
        <span className="portrait-tag" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero
