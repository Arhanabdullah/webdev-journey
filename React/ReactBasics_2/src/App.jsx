import React from 'react'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='parent'>
      <Cards user="Arhan" img="https://images.pexels.com/photos/34455935/pexels-photo-34455935.jpeg"/>
      <Cards user="Abdullah" img="https://images.pexels.com/photos/34454978/pexels-photo-34454978.jpeg"/>
      
    </div>
    
  )
}

export default App
