import React from 'react'

const NavBar = () => {
    return (

        <div className="flex justify-between items-center px-10 py-3">
            <h4 className="rounded-full px-4 py-2 bg-black text-white font-bold text-sm">
                Naiki Shop
            </h4>

            <div className="flex items-center gap-6">
                <a className="rounded-full px-4 py-2 bg-gray-200" href="#">Home</a>
                <a className="rounded-full px-4 py-2 bg-gray-200" href="#">Contact</a>
                <a className="rounded-full px-4 py-2 bg-gray-200" href="#">About Us</a>
            </div>

        </div>

    )
}

export default NavBar
