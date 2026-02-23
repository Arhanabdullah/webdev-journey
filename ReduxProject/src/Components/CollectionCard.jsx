import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/CollectionSlice'
const CollectionCard = ({item}) => {
    const dispatch = useDispatch()

    const removeFromCollection = (item)=>{
        dispatch(removeCollection(item))
        dispatch(removeToast())
    }
    
    return (
        <div className='w-[18vw] relative h-80 bg-white rounded-2xl '>
            <a target="_blank" href={item.link}>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center rounded-2xl ' src={item.url} alt={item.title} /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center rounded-2xl' autoPlay muted loop src={item.download_url} > </video> : ''}
            </a>
            <div id='bottom' className='w-full px-6 py-6 absolute bottom-0 text-white flex justify-between items-center'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
                <button
                    onClick={() => {
                        removeFromCollection(item)
                    }}
                    className='bg-red-500 text-white cursor-pointer rounded px-3 py-2 font-medium'
                >
                    Remove
                </button>

            </div>
        </div>
    )
}

export default CollectionCard
