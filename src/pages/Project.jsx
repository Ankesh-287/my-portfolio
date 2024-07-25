import React from 'react'
import '../style/Project.css'
import Heading from '../components/Heading'

function Project() {
    return (
        <>
            <div className="project-section">
                <Heading title="My Projects" />
                <div className="project-page">
                    <a href="">
                        <div className="project-card">
                            <img src="https://github.com/Ankesh-287/my-portfolio/blob/main/public/portfolio.png?raw=true" alt="react" />
                            <p className="lang-text">Portfolio</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="project-card">
                            <img src="https://github.com/Ankesh-287/my-portfolio/blob/main/public/calculator.png?raw=true" alt="react" />
                            <p className="lang-text">Calculator</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="project-card">
                            <img src="https://github.com/Ankesh-287/my-portfolio/blob/main/public/todo.png?raw=true" alt="react" />
                            <p className="lang-text">Todo</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="project-card">
                            <img src="https://github.com/Ankesh-287/my-portfolio/blob/main/public/currency.png?raw=true" alt="react" />
                            <p className="lang-text">Currency Converter</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Project
