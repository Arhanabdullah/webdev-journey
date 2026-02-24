import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../Components/CollectionCard'

const CollectionPages = () => {

    const collection = useSelector(state => state.collection.items)
    return (
        <div
            className='overflow-auto py-8 px-6'
        >
            {collection.length > 0 ?
                <div
                    className='flex justify-between mb-8'
                >
                    <h2
                        className='text-3xl font-medium'
                    >
                        Your Collection
                    </h2>
                    <button
                        onClick={() => {
                            clearAll()
                        }}
                        className='bg-red-700 active:scale-9 transition cursor-pointer
                        text-white rounded px-3 py-2 font-medium'
                    >
                        Clear Collection
                    </button>
                </div> :
                <h2
                    className='text-5xl py-10 text-gray-300 text-center font-medium'
                >
                    Collection is empty
                </h2>}

            <div
                className=' p-4 flex justify-start flex-wrap gap-2 '
            >
                {
                    collection.map((item, idx) => {
                        return <div key={idx}>{<CollectionCard item={item} />}</div>
                    })
                }
            </div>
        </div>
    )
}

export default CollectionPages
