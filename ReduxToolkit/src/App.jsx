import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './Redux/CounterSlice'

const App = () => {
const [num, setnum] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  return (
    <div>
      <h1>{count}</h1>
      
      
      <button onClick={()=>{
        dispatch(increment())
      }}>Increment</button>
      
      
      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement</button>

      <input
        value={num}
        type="number"
        onChange={(e) => {
          setnum(e.target.value)
        }} />

      <button onClick={() => {
        dispatch(incrementByAmount(Number(num)))
      }}>
        Increase by Amount
      </button>
    </div>
  )
}

export default App
