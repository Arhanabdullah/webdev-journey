import React from "react"
import cards from "./components/cards"
import NavBar from "./components/NavBar"
const App = () => {
  return (
    <>
    <NavBar />
    <div className="card">
      <h1>Arhan Abdullah</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis laborum earum quo, non culpa cum harum aspernatur at et amet doloremque corrupti aliquid?</p>
    </div>
    {cards()}
    </>
  )
}

export default App
