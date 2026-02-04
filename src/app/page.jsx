import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import About from '@/components/About'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <About />
      <Footer />
    </main>
  )
}