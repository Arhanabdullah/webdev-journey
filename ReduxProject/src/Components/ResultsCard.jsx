import React from 'react'

const ResultsCard = ({item}) => {
  return (
    <div className='w-[18vw] relative h-80 bg-white rounded'>
      <a target="_blank" href='{item.url}'>
          {item.type == 'photo'? <img className='h-full w-full object-cover object-center' src={item.url} alt={item.title} /> : ''}
          {item.type == 'video'? <video className='h-full w-full object-cover object-center' autoPlay muted loop src={item.download_url} > </video>:''}
      </a>
      <div id='bottom' className='w-full px-6 py-10 absolute bottom-0 text-white flex justify-between items-center'>
        <h2  className='text-lg font-semibold capitalize'>{item.title}</h2>
        <button className='bg-indigo-500 text-white rounded px-3 py-2 font-medium'>Save</button>

      </div>
    </div>
  )
}

export default ResultsCard
