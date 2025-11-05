import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full w-2/3 p-6 rounded-4xl  overflow-x-auto flex flex-nowrap gap-2'>
      {props.users.map((elem,idx)=>{
        
        return <RightCard  img={elem.img} tag={elem.tag} desc={elem.desc} key={idx} id={idx}/>
      })}
    </div>
  )
}

export default RightContent
