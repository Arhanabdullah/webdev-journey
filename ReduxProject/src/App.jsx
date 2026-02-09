import React from 'react'
import { getPhotos } from './Api/mediaApi'
import { getVideos } from './Api/mediaApi'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className='bg-gray-800 text-white h-screen w-full'>
      <SearchBar />
    </div>
  )
}

export default App
