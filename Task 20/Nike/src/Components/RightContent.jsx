import React, { useState } from 'react'
import CartItem from './CartItem'
const RightContent = (props) => {

  return (
    <div className='px-3   w-[40%] rounded-l-xl rounded-b-xl bg-gray-400 '>
      <h1 className='font-bold text-6xl my-2 '>Cart</h1>
      <CartItem shoes={props.shoes}/>
    </div>
  )
}

export default RightContent
