
import { useState } from 'react'
import './App.css'
import Square from './components/Square'

function App() {
 
  const[colors, setColors] = useState(["white", "white", "black", "white"])

  function smallDJ(){
    if(colors[0] === "white"){
      setColors(['black', 'black', 'black', 'black'])
    }

    if(colors[0] === "black"){
      setColors(['white', 'white', 'white', 'white'])
    }
  }

  function partyDJ(){
    setColors(["purple", "purple", ...colors.slice(2)])
  }

  function leftBlue(){
    setColors([...colors.slice(0, 2), "blue", colors[3]])

  }

  function rightBlue(){
    setColors([...colors.slice(0, 2), colors[2], "blue"])
  }

  function bigOne(){
    setColors(["gold", colors[1], colors[2], colors[3]])
  }

  function bigTwo(){
    setColors([colors[0], "red", colors[2], colors[3]])
  }

  function bigThree(){
    setColors([colors[0], colors[1], "green", colors[3]])
  }

  function bigFour(){
    setColors([colors[0], colors[1], colors[2], "orange"])
  }
 
  return (
    
      <div className='grid'>
        {colors.map((color, index) => (
          <Square key={index} color={color} />
        ))
        }
        <button onClick={() => smallDJ()}>DJ Small</button>
        <button onClick={() => partyDJ()}>DJ Party</button>
        <button onClick={() => leftBlue()}>Left Blue</button>
        <button onClick={() => rightBlue()}>Right Blue</button>
        <button onClick={() => bigOne()}>Big One</button>
        <button onClick={() => bigTwo()}>Big Two</button>
        <button onClick={() => bigThree()}>Big Three</button>
        <button onClick={() => bigFour()}>Big Four</button>
      </div>
  
  )
}

export default App
