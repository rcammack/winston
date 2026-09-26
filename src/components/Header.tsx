import content from '../content.yaml'

function Header() {
  return (
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
  )
}

export default Header
