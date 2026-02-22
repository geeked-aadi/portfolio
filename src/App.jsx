import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Certificates from './pages/Certificates'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import SkillNetwork from './pages/Skills'

const MOBILE_BREAKPOINT = 900

export default function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [mobileActiveSection, setMobileActiveSection] = useState('home')

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    const handler = () => setIsMobile(mq.matches)
    handler()
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const sectionId = (id) => (isMobile && mobileActiveSection !== id ? 'mobile-section-hidden' : '')

  return (
    <div className={`app ${isMobile ? 'mobile-single-page-app' : ''}`} style={{ scrollBehavior: 'smooth' }}>
      <Navbar
        isMobile={isMobile}
        onMobileSectionChange={setMobileActiveSection}
        activeSectionOverride={isMobile ? mobileActiveSection : undefined}
      />
      <main style={{ width: '100%' }} className={isMobile ? 'mobile-single-page' : ''}>
        {/* Home Section */}
        <section id="home" className={sectionId('home')}>
          <Home />
        </section>

        {/* Projects Section
        <section id="projects">
          <Projects />
        </section> */}

        {/* Gallery Section
        <section id="gallery">
          <Gallery />
        </section> */}

        {/* Skills Section */}
        <section id="skills" className={sectionId('skills')}>
          <SkillNetwork />
        </section>

        {/* Certificates Section */}
        <section id="certificates" className={sectionId('certificates')}>
          <Certificates />
        </section>

        {/* Resume Section
        <section id="resume">
          <Resume />
        </section> */}

        {/* About Section */}
        <section id="about" className={sectionId('about')}>
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact" className={sectionId('contact')}>
          <Contact />
        </section>
      </main>
      <footer className={`footer ${isMobile ? 'mobile-footer' : ''}`} style={{ marginTop: '3rem' }}>
        © {new Date().getFullYear()} Aditya Aradhya — Built with React
      </footer>
    </div>
  )
}
