import { useState } from 'react'

import './App.css'
import RandomMovie from './components/RandomMovie'
import Nav from './components/Nav';

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light');


  function toggleTheme(){
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

 return(
  <div className={`${theme} main`}>
    <Nav toggleTheme={toggleTheme}/>
    <RandomMovie />
  </div>
 )
}

export default App
