import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/SearchSlice'


const SearchBar = () => {
    const dispatch = useDispatch() 
    function submitHandler(e) {
        e.preventDefault()
        dispatch(setQuery(text))
        settext('')
    }

    const [text, settext] = useState('')
    return (
        <div className='p-10'>
            <form
                className='flex gap-5 items-center'
                onSubmit={(e) => { submitHandler(e) }}>
                <input
                    value={text}
                    required
                    onChange={(e) => { settext(e.target.value) }}
                    className='w-full rounded bg-gray-500 px-10 py-2 text-xl outline-none border-2 border-white'
                    type='text'
                    placeholder='Search...' />
                <button
                    className='cursor-pointer bg-white font-bold text-gray-500 active:scale-105 hover:scale-90 rounded px-10 py-2 text-xl outline-none border-2 border-white'
                    type='submit'>
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar
