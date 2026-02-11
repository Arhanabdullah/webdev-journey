import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/SearchSlice'


const Tabs = () => {
    const tabs = ['All', 'Photos', 'Videos']
    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)
    return (
        <div className='flex gap-5 p-6 '>
            {tabs.map((elem, idx) => (
                <button
                    onClick={() => {
                        dispatch(setActiveTabs(elem))
                    }}
                    key={idx}
                    className={`cursor-pointer font-bold text-xl outline-none border-2 rounded px-8 py-2 ${elem === activeTab ? 'bg-white text-gray-500' : 'bg-gray-500 text-white'}`}
                >
                    {elem}
                </button>
            ))}
        </div>
    )
}

export default Tabs
