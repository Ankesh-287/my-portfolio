import React from 'react'
import '../style/Portfolio.css'
import { NavLink } from 'react-router-dom';
import About from './About'
import Skills from '../components/Skills.jsx'
import Contact from './Contact.jsx'
import Thanks from '../components/Thanks.jsx'

function portfolio() {
  return (
    <>
      <div id="portfolio-page">
        <img src="https://img.freepik.com/free-photo/black-frame-with-copy-space-top-view_23-2148643791.jpg?w=1380&t=st=1718278392~exp=1718278992~hmac=ecfe97d692901d64e5ed27520c3069187d2ae3663a4e0fe086f6b678d3e62c77" alt="" />
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

export default portfolio
