import React from 'react'
import Card from './Card'

const ProductCard = (props) => {

  return (
    <div className='flex gap-20 flex-wrap '>
      {props.shoes.map((elem, idx) => {

        return <Card img={elem.img} name={elem.name} price={elem.price} key={idx} id={idx} />
      })}

    </div>
  )
}

export default ProductCard
