import React from 'react'

const Cards = (props) => {
  return (
    <div>
      <div className="parent">
      <div className="card">
        <img src={props.img} alt="image" />
        <h1>{props.user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta omnis odio.</p>
      <button>View Profile</button>
      </div>
      </div>
      
      </div>
  )
}

export default Cards
