import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CollectionPages from './Pages/CollectionPages'
import Navbar from './Components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div className='h-full text-white w-full bg-gray-800'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collections' element={<CollectionPages />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
