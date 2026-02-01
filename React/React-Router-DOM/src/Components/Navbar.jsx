import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div class="navbar">
            <h2>Arhan</h2>
            <div>
                <Link to='/' >Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contacts</Link>
            </div>
        </div>
    )
}

export default Navbar
