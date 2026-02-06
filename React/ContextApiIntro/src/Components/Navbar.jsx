import React, { useContext } from 'react'
import Nav2 from './Nav2'
import ThemeContext, { ThemeDataContext } from '../Context/ThemeContext'

const Navbar = () => {
    const data=useContext(ThemeDataContext)
    console.log(data);
    
    return (
        <div className='navbar'>
            <h2>SneakThrift</h2>

            <Nav2 />
            <h4>{data}</h4>
        </div>
    )
}

export default Navbar
