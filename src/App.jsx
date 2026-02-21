import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Certificates from './pages/Certificates'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import SkillNetwork from './pages/Skills'  

export default function App() {
  return (
    <div className="app" style={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      <main style={{ width: '100%' }}>
        {/* Home Section */}
        <section id="home">
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
        <section id="skills">
          <SkillNetwork />
        </section>

        {/* Certificates Section */}
        <section id="certificates">
          <Certificates />
        </section>

        {/* Resume Section
        <section id="resume">
          <Resume />
        </section> */}

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="footer" style={{ marginTop: '3rem' }}>
        © {new Date().getFullYear()} Aditya Aradhya — Built with React
      </footer>
    </div>
  )
}
