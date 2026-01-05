import React, { useState } from 'react'
import CartItem from './CartItem'
const RightContent = (props) => {

  return (
    <div className='px-3   w-[40%] rounded-l-xl rounded-b-xl bg-gray-500 text-white'>
      <div className='mx-4'>
      <h1 className='font-bold text-6xl my-2 '>Cart</h1>
      {props.cartItems.map((item, index) => (
        <CartItem key={index} item={item} decreaseItem={props.decreaseItem} increaseItem={props.increaseItem} />
      ))}
      <div className="flex justify-end align-bottom  mt-6 border-t pt-4">
        <p className="text-xl font-semibold">
          Total: ₹{props.cartTotal}
        </p>
      </div>
      </div>
    </div>
  )
}

export default RightContent
