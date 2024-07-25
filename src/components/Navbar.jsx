import React from 'react'
import '../style/Navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="nav">
                <div className="nav-menu">
                    <NavLink to="/portfolio" className="navlinks">Portfolio </NavLink>
                    <NavLink to="/about" className="navlinks">About us </NavLink>
                    <NavLink to="/contact" className="navlinks">Contact</NavLink>
                    <NavLink to="/project" className="navlinks">Projects</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar
