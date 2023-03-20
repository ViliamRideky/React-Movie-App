import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="all-movies">Movies</NavLink>
                <NavLink to="form">Adding a Movie</NavLink>
            </nav>
        </header>
    )
}

export default Navbar