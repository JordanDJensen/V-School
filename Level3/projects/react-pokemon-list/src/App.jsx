import { useEffect, useState } from 'react'

import './App.css'
import axios from "axios"

function App() {
  const [bgColor, setBgColor] = useState("")

  const [pokemonData, setPokemonData] = useState([])


  

  useEffect(() =>{
    axios.get("https://api.vschool.io/pokemon")
    .then(response => (setPokemonData(response.data.objects[0].pokemon)))
    .catch(err => console.log(err))
  }, [])

  useEffect(() =>{
    axios.get("https://random-color.onrender.com/colors/random")
    .then(response => console.log(Object.values(response.data)))
    .catch(err => console.log(err))
  }, [])

  const pokemonList = pokemonData.map(pokemon => {
      return (
        <>
          <h1>{pokemon.name}</h1>
        </>
      )
  })


  return (
    <>
      <div>
      {pokemonList}
      </div>
    </>
  )
}

export default App
