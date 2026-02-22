import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../Components/CollectionCard'

const CollectionPages = () => {

    const collection = useSelector(state => state.collection.items)
    return (
        <div className='flex justify-between flex-wrap gap-4 overflow-auto py-8'>
            {
                collection.map((item,idx)=>{
                    return <div key={idx}>{<CollectionCard item={item} />}</div>
                })
            }
        </div>
    )
}

export default CollectionPages
