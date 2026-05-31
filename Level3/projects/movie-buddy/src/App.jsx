import { useState } from 'react'

import './App.css'
import RandomMovie from './components/RandomMovie'

function App() {
  const [count, setCount] = useState(0)

 return(
  <div>
    <RandomMovie />
  </div>
 )
}

export default App
