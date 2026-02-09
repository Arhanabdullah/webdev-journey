import React, { useState } from 'react'

const SearchBar = () => {
    function submitHandler(e){
        e.preventDefault()
    }
    
    const [text, settext] = useState('')
    return (
        <div>
            <form className='flex gap-5 items-center p-4' 
            onSubmit={submitHandler}>
                <input required className='w-full rounded bg-gray-500 px-10 py-2 text-xl outline-none border-2 border-white' type='text' placeholder='Search...' />
                <button className='cursor-pointer bg-white font-bold text-gray-500 active:scale-105 hover:scale-90 rounded px-10 py-2 text-xl outline-none border-2 border-white' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
