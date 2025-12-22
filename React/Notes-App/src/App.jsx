import React, { useState } from "react";
import { X } from 'lucide-react';
const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    let copyTask = [...task];
    
    copyTask.push({ title, details });
    setTask(copyTask);
    
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) =>{
    const copyTask =[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="lg:w-1/2 p-10 flex flex-col gap-4 ">
        <h1 className="text-4xl font-bold ">Add Notes</h1>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="px-5 py-2 rounded border-2 outline-none text-xl"
          type="text"
          value={title}
          placeholder="Enter Notes Heading"
        />

        <textarea
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          className="px-5 py-2 h-28 rounded border-2 outline-none text-xl"
          type="text"
          value={details}
          placeholder="Enter Details"
        />
        <button className="px-5 py-2 text-black bg-white rounded outline-none font-semibold active:scale-x-97  ">
          Add Notes
        </button>
      </form>
      <div className=" p-10 lg:w-1/2 lg:border-l ">
        <h1 className="text-4xl font-bold ">Recent Notes</h1>
        <div className="flex flex-wrap justify-start items-start gap-5 mt-5 overflow-auto ">
          {task.map(function (element, idx) {
            return (
              <div
                key={idx}
                className="flex flex-col items-start justify-between bg-cover bg-white text-black rounded-xl pt-8 pb-4 px-4 py-6 ">
                  <div> 
                <h3 className="leading-tight text-xl font-bold">{element.title}</h3>
                <p className="pt-6 leading-tight font-medium text-gray-800">{element.details}</p>
              </div>
              <button onClick={deleteNote} className="mt-4 w-full bg-red-500 active:bg-red-400 active:scale-95 font text-xs text-white px-4 py-1 rounded">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
