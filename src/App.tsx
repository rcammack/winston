import './styles/shared.css'
import './App.css'
import AboutSection from './components/AboutSection'
import CareGuide from './components/CareGuide'
import CommandsSection from './components/CommandsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import PhotoGallery from './components/PhotoGallery'
import QuickFacts from './components/QuickFacts'

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <QuickFacts />
        <AboutSection />
        <CareGuide />
        <CommandsSection />
        <PhotoGallery />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
