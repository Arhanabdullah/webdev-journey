import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {


  const Navigate = useNavigate()
  const navigateHome = ()=>{

    Navigate('/')
  }
  const backPage = ()=>{

    Navigate(-1)
  }


  return (
    <div>
      <button onClick={navigateHome} className='bg-amber-500 text-bold px-4 py-2 rounded m-4 cursor-pointer active:scale-105 '>Return To Home</button>
      <button onClick={backPage} className='bg-amber-500 text-bold px-4 py-2 rounded m-4 cursor-pointer active:scale-105 '>Back</button>
      <h1>About</h1>
    </div>
  )
}

export default About
