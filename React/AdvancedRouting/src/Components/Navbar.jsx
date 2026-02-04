import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between bg-amber-500 px-8 py-4'>
            <div className='text-2xl font-bold text-white'>Arhan</div>
            <div className='flex justify-center items-center gap-10 '>
                <Link to='/' >Home</Link>
                <Link to='/Product'>Products</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contacts</Link>
            </div>


        </div>
    )
}

export default Navbar
