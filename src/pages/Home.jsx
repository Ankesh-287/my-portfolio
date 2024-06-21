import React from 'react'
import '../style/Portfolio.css'
import { NavLink } from 'react-router-dom';
import About from './About'
import Skills from '../components/Skills.jsx'
import Contact from './Contact.jsx'
import Thanks from '../components/Thanks.jsx'

function Home() {
  return (
    <>
      <div id="portfolio-page">
        <img src="../../public/frame.jpg" alt="" />
        <div className="intro">
          <div className="intro-text">
            <p>I'M  <span>Ankesh Patil
            </span></p>
            <p>Web Developer in React JS</p>
          </div>
          <NavLink to="/contact"><button > Hire Me </button></NavLink>
          <a href={`${import.meta.env.BASE_URL}Resume.pdf`} target="_blank" rel="noopener noreferrer">
            <button>Resume</button>
          </a>
        </div>
      </div>
      <About />
      <Skills />
      <Contact />
      <Thanks />
    </>
  )
}

export default Home;
