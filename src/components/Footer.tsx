import content from '../content.yaml'

function Footer() {
  return (
    <footer>
      <span>{content.footer.message}</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}

export default Footer
