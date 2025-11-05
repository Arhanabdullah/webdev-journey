import React from 'react'
import Navbar from './navbar'
import Page1content from './Page1content'

const section1 = (props) => {
  return (
    <div className='h-screen w-full font-bold '>
      <Navbar />
      <Page1content users={props.users}/>
      

    </div>
  )
}

export default section1
