import React from 'react'
import ProductCard from './ProductCard'

const LeftContent = (props) => {
    return (
        <div className='px-10 py-10 w-[60%] flex flex-wrap rounded-b-xl rounded-r-xl  bg-gray-600 h-full  z-10 shadow-black shadow-2xl'>
            <ProductCard shoes={props.shoes} addItem={props.addItem}/>
        </div>
    )
}

export default LeftContent
