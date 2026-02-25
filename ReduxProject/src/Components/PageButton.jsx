import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPage,  } from '../redux/features/SearchSlice'

const PageButton = () => {
    const dispatch = useDispatch()
    const { page, activeTab } = useSelector((store) => store.search)
    const nextButton = () => {
        dispatch(setPage(page + 1))
    }
    const previousButton = () => {
        if (page === 1) return
        dispatch(setPage(page - 1))
    }
    useEffect(() => {
        dispatch(setPage(1))
    }, [activeTab])
    
    return (
        <>
            <div className='w-full flex justify-center items-center py-8 gap-6'>
                <button
                    onClick={() => {

                        nextButton()
                    }}
                    className='rounded px-6 py-2 font-medium text-base active:scale-105 cursor-pointer bg-white text-gray-500'
                >
                    Next
                </button>
                <h4>Page {page}</h4>
                <button
                    onClick={() => {

                        previousButton()
                    }}
                    className='rounded px-6 py-2 font-medium text-base active:scale-105 cursor-pointer bg-white text-gray-500'
                >
                    Previous
                </button>
            </div>
        </>
    )
}

export default PageButton
