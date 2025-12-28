import React, { useState } from 'react'

const CartItem = (props) => {
    console.dir(props)
    const [quantity, setQuantity] = useState(1)
    const addQuantity = () => {
        setQuantity(quantity + 1)
    }
    const reduceQuantity = () => {
        setQuantity(quantity - 1)

    }
    return (
        <div className='flex flex-col flex-nowrap'>
            <div className='w-full h-2/6 py-4 m-2'>
                <div className='flex justify-between items-center my-8 '>
                    <img className='w-20 h-20 object-cover border-white border shadow-2xl shadow-gray-800 rounded-xl' src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=60" alt="" />
                    <p className='text-2xl font-semibold'>Nike Dunks</p>
                    <div className='flex justify-end items-center'>
                        <p className='mr-4'>₹{quantity*4999}</p>
                        <button onClick={reduceQuantity} className='border border-black rounded-full px-2 py-0 font-bold text-l bg-gray-200 ' >-</button>
                        <p className='font-semibold mx-2'>{quantity}</p>
                        <button onClick={addQuantity} className='border border-black rounded-full px-2 py-0 font-bold text-l bg-gray-200'>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
