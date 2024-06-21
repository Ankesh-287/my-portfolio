import React from 'react'
import '../style/Skills.css'
import Heading from '../components/Heading'

function Skills(props) {
    return (
        <>
            <div className="skills-section">
                <Heading title="My Skills" />
                <div className="skill-page">
                    <div className="skill-card">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" alt="react" />
                        <p className="lang-text">React</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://icons.veryicon.com/png/System/Plex/Other%20html%205.png" alt="html" />
                        <p className="lang-text">HTML</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://icons.veryicon.com/png/o/file-type/file-type-icon-library/css-29.png" alt="css" />
                        <p className="lang-text">CSS</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://icons.veryicon.com/png/o/file-type/file-type-icon-library/js-10.png" alt="javascript" />
                        <p className="lang-text">Javascript</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://pngimg.com/d/mysql_PNG29.png" alt="MySql" />
                        <p className="lang-text">MySql</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://www.mangoitsolutions.com/wp-content/uploads/2020/09/php.png" alt="php" />
                        <p className="lang-text">Php</p>
                    </div>
                    <div className="skill-card">
                        <img src="https://user-images.githubusercontent.com/11978772/40430921-73d53922-5e63-11e8-8dcd-1662136c3212.png" alt="php" />
                        <p className="lang-text">Mongodb</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
