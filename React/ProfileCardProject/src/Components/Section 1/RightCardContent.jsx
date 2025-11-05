import React from 'react'

const RightCardContent = (props) => {
    return (
        <div>
            <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
                <h2 className='bg-white rounded-full h-12 w-12  flex justify-center items-center text-2xl font-bold '>{props.id+1}</h2>
                <div>
                    <p className='text-white mb-10 leading-relaxed text-lg font-normal'>{props.desc}</p>
                    <div className='flex justify-between'>
                        <button className=' bg-blue-200 px-6 py-2 rounded-full text-white'>{props.tag}</button>
                        <button className=' bg-blue-200 px-4 py-2 rounded-full text-white'><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
