import { useState, useEffect, useRef } from 'react'

import { useInView } from 'framer-motion'

import NavBar from '../components/Navbar'
import Hero from '../containers/Hero'
import AboutMe from '../containers/AboutMe'
import Skills from '../containers/Skills'
import Experiences from '../containers/Experiences'
import Projects from '../containers/Projects'
import Contact from '../containers/Contact'
import Footer from '../containers/Footer'
import EmailComponent from '../components/EmailComponent'

const Home = () => {
  const [color, setColor] = useState(false)
  const myRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(myRef, { once: false, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      setColor(true)
    } else {
      setColor(false)
    }
  }, [isInView])

  return (
    <>
      <NavBar className={color} />
      <div ref={myRef}>
        <Hero />
      </div>
      <AboutMe />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
      <EmailComponent />
    </>
  )
}

export default Home
