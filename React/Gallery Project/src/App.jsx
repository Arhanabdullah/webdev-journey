import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [data, setData] = useState([])
  const [index, setindex] = useState(1)
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    console.log(response.data);

    setData(response.data)
  }
  useEffect(function () { getData() }, [index])
  let printUserData = <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-gray-300 '>Loading...</h3>
  if (data.length > 0) {
    printUserData = data.map(function (elem, idx) {
      return <div key={idx}>

        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt={idx} key={idx} />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>;
    })

  }
  return (


    <div className='h-screen w-screen bg-black text-white p-4 overflow-auto '>
      <h1 className='text-4xl font-bold px-6 py-2 '>Gallery</h1>


      <div className='flex gap-4 h-[82%] space-between items-center flex-wrap p-4'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-4'>
        <button onClick={()=>{
          index==1?setindex(1):setindex(index-1)
          console.log(index);
          
          setData([])
        }} className='px-6 py-2 rounded-lg text-black font-semibold bg-amber-500 cursor-pointer text-sm active:scale-95'>Prev</button>
        <h4>Page {index}</h4>
        <button onClick={()=>{
          setindex(index+1)
          setData([])
        }} className='px-6 py-2 rounded-lg text-black font-semibold bg-amber-500 cursor-pointer text-sm active:scale-95'>Next</button>
      </div>
    </div>

  )
}

export default App