import React from 'react'
import { getPhotos } from './Api/mediaApi'
import { getVideos } from './Api/mediaApi'
import SearchBar from './Components/SearchBar'
import Tabs from './Components/Tabs'
import ResultsGrid from './Components/ResultsGrid'

const App = () => {
  return (
    <div className='bg-gray-800 text-white h-screen w-full'>
      <SearchBar />
      <Tabs />
      <ResultsGrid />
    </div>
  )
}

export default App
