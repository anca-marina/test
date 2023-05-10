import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx";
import Welcome from "./Welcome.jsx";

function App() {
    const name = "Anca :D"

  return (
    <div>
        <Header />
        <h1>Hello {name}</h1>
        <Welcome username="Ale" color="blue"/>
        <Welcome username="Lari" color="pink"/>
    </div>
  )
}

export default App
