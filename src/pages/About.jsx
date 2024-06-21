import React from 'react'
import '../style/About.css'
import '../components/Heading'
import Heading from '../components/Heading'

function About() {
  return (
    <>
      <div className="about-section">
        <div className="about-page">
          <Heading class="heading" title="About" />
          <p>As a dedicated React developer, I excel in building robust, scalable web applications using modern front-end technologies. With expertise in React.js, Redux, and modern JavaScript (ES6+), I specialize in crafting dynamic, user-centric interfaces. My experience includes optimizing performance, implementing responsive design, and integrating RESTful APIs. I am committed to delivering high-quality code, collaborating effectively in agile environments, and continually learning new techniques to drive innovation.</p>
        </div>
      </div>
    </>
  )
}

export default About
