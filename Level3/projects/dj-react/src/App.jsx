
import { useState } from 'react'
import './App.css'
import Square from './components/Square'

function App() {
 
  const[colors, setColors] = useState(["white", "white", "black", "white"])

  function smallDJ(){
    if(colors[0] === "white"){
      setColors(['black', 'black', 'black', 'black'])
    } else {
      setColors(["white", "white", "white", "white"])
    }
  }

  function partyDJ(){
    setColors(["purple", "purple", ...colors.slice(2)])
  }

  function leftBlue(){
    setColors([...colors.slice(0, 2), "blue", colors[3]])

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
      </div>
  
  )
}

export default App
