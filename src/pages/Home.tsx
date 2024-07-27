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
  return (
    <>
      <NavBar />
      <Hero />
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
