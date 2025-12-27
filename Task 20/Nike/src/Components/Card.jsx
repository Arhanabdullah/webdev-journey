import React from 'react'

const Card = (props) => {
    console.log(props);

    return (
        <div className='bg-gray-400 w-70 h-80 rounded-2xl shadow-2xl hover:scale-110 transition-all'>
            <img className='object-fill  rounded-2xl max-h-40 w-70 ' src={props.img} alt="Shoe Image" />
            <div className='p-4 flex justify-center items-center flex-col my-1'>
                <h3 className='font-bold text-2xl'>{props.name}</h3>
                <p className='font-semibold text-xl my-1'>₹{props.price}</p>
                <button className='bg-red-500 text-white px-4 py-2 rounded-3xl text-center font-bold active:scale-105 active:bg-red-300 border hover:scale-95 transition-all' >Add to Cart</button>
            </div>
        </div>
    )
}

export default Card
