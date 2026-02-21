import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-6 bg-gray-500'>
      <h3 className='bg-gray-500 text-center p-2 text-xl font-semibold'>Media Search</h3>
      <div className='flex items-center gap-4'>
        <Link className='text-base font-medium active:scale-105 bg-white text-gray-500 rounded px-4 py-2' to='/'>Search</Link>
        <Link className='text-base font-medium active:scale-105 bg-white text-gray-500 rounded px-4 py-2' to='/collections'>Collections</Link>
      </div>
    </div>
  )
}

export default Navbar
