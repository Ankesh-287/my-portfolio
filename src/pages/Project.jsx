import React from 'react'
import '../style/Project.css'
import Heading from '../components/Heading'
import { NavLink } from 'react-router-dom'

function Project() {
    return (
        <>
            <div className="project-section">
                <Heading title="My Projects" />
                <NavLink to='/project'><div className="see">See more...</div></NavLink>
                <div className="project-page">
                    <NavLink to="https://my-portfolio-ankesh-287s-projects.vercel.app/">
                        <div className="project-card">
                            <img src="https://github.com/Ankesh-287/my-portfolio/blob/main/public/portfolio.png?raw=true" alt="react" />
                            <p className="lang-text">Portfolio</p>
                        </div>
                    </NavLink>
                    <NavLink to="https://ankesh-287.github.io/Calculator.github.io/">
                        <div className="project-card">
                            <img src="https://github.com/Ankesh-287/my-portfolio/blob/main/public/calculator.png?raw=true" alt="react" />
                            <p className="lang-text">Calculator</p>
                        </div>
                    </NavLink>
                    <NavLink to="https://ankesh-287.github.io/ToDoList/">
                        <div className="project-card">
                            <img src="https://github.com/Ankesh-287/my-portfolio/blob/main/public/todo.png?raw=true" alt="react" />
                            <p className="lang-text">Todo</p>
                        </div>
                    </NavLink>
                    <NavLink to="https://bg-changer-peach-eight.vercel.app/">
                        <div className="project-card">
                            <img src="https://github.com/Ankesh-287/my-portfolio/blob/main/public/background.png?raw=true" alt="react" />
                            <p className="lang-text">Background Changer</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Project
