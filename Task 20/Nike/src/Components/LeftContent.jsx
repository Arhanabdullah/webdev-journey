import React from 'react'
import ProductCard from './ProductCard'

const LeftContent = (props) => {
    return (
        <div className='px-10 py-14 w-[60%] flex flex-wrap bg-gray-200  '>
            <ProductCard shoes={props.shoes} />
        </div>
    )
}

export default LeftContent
