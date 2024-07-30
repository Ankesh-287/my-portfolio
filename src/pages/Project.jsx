import React, { useState } from 'react'
import '../style/Project.css'
import Heading from '../components/Heading'
import { NavLink } from 'react-router-dom'
import project from "../data/data.json"

function Project() {

  const [limit, setLimit] = useState(4)

  const handleData = () => {
    if (limit === 4) {
      setLimit(project.length)
    } else {
      setLimit(4)
    }
  }

  return (
    <>
      <div className="project-section">
        <div className="ph">
          <Heading title="My Projects" />
          <NavLink to='/project'>
            <div className="see" onClick={handleData}>
              {limit === 4 ? 'See more...' : 'See less...'}
            </div>
          </NavLink>
        </div>
        <div className="project-page">
          {project.slice(0, limit).map((data, id) => (
            <NavLink to={data.link} key={id} target='_blank'>
              <div className="project-card">
                <img src={data.image} alt={data.name} />
                <p className="lang-text">{data.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}

export default Project
