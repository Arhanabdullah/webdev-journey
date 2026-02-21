import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CollectionPages from './Pages/CollectionPages'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='h-screen text-white w-full bg-gray-800'>
      <Navbar/>
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/collections' element={<CollectionPages />}/>
      </Routes>
      </div>
  )
}

export default App
