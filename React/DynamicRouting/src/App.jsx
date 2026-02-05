import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Notfound from './Pages/Notfound'
import { Route, Routes } from 'react-router-dom'
import Kids from './Pages/Kids'
import Mens from './Pages/Mens'
import Womens from './Pages/womens'
import Courses from './Pages/Courses'
import CourseDetail from './Pages/CourseDetail'


const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail />}/>
        <Route path='/product' element={<Product />} >
          <Route path='mens' element={<Mens />} />
          <Route path='womens' element={<Womens/>} />
          <Route path='kids' element={<Kids />} />
        </Route>
        <Route path='/*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
