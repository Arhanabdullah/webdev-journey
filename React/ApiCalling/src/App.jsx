import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  // async function getData (){
  //  const response =await fetch("https://jsonplaceholder.typicode.com/posts");
  //  console.log(response);

  // }
  // const newData= async() =>{
  //   const response =await fetch("https://jsonplaceholder.typicode.com/posts");
  //   console.log(response);
  //   const data = await response.json();
  //   console.log(data);

  // }
  // const getData = async () => {
  //   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   console.log(response.data);
  // }
  const [Data, setData] = useState([])
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  }

  return (
    <div>
      <button onClick={getData}>Click to fetch data</button>
      <div>{data.map((elem,idx)=>{
        return <h3>{elem.author}, {idx}</h3>})} </div>
    </div>
  )
}

export default App