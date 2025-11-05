import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full w-80 overflow-hidden shrink-0 relative bg-red-600 rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <RightCardContent tag={props.tag} desc={props.desc} idx={props.idx} key={props.idx} id={props.id}/>
        </div>
    )
}

export default RightCard
