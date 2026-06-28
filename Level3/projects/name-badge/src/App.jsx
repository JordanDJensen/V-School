import { useState } from 'react'
import BadgeForm from './components/BadgeForm'
import './App.css'
import Badge from './components/Badge'
import BadgeList from './components/BadgeList'

function App() {

  const [badges, setBadges] = useState([])

  function addBadge(newBadge){
    setBadges(prevBadges =>{
      return [...prevBadges, newBadge]
    })

  }

  return (
    <>
      <BadgeForm addBadge={addBadge} />
      <BadgeList badges={badges}/>

    </>
  )
}

export default App
