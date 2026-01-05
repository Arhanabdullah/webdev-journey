import React, { useState } from 'react'

const CartItem = ({ item, decreaseItem, increaseItem  }) => {
  
console.log(item);

  return (

    <div className='flex justify-between items-center my-4'>
      <img
        className='w-20 h-20 rounded-xl'
        src={item.img}
        alt={item.name}
      />

      <p className='text-xl font-semibold'>{item.name}</p>

      <div className='flex items-center'>
        <p className='mr-4'>₹{item.price * item.quantity}</p>

        <button onClick={() => decreaseItem(item.name)}
  className='border border-black rounded-full px-3'>-</button>
        <p className='mx-2'>{item.quantity}</p>
        <button className='border border-black rounded-full px-3' onClick={() => increaseItem(item.name)} >+</button>
      </div>
    </div>

  )
}

export default CartItem
