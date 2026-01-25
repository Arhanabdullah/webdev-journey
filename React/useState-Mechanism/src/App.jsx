import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  function increase(){
    setNum(num+1)
  };
  function decrease(){
    setNum(num-1)
  };
function increaseBy10(){
    setNum(num+10)
  };
function decreaseBy10(){
    setNum(num-10)
  };
function reset(){
    setNum(0)
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increaseBy10}>Increase By 10</button>
      <button onClick={decreaseBy10}>Decrease By 10</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
