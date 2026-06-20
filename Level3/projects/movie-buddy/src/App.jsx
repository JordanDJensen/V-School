import { useState } from 'react'

import './App.css'
import RandomMovie from './components/RandomMovie'
import Nav from './components/Nav';
import FavortieMovies from './components/FavoriteMovies';
import Form from './components/Form';

function App() {
  const [theme, setTheme] = useState('light');


  function toggleTheme(){
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const [favMovies, setFavMovies] = useState([])
  console.log(favMovies)
  function addMovie(newMovie){
    setFavMovies(preFavMovie => {
      return [...preFavMovie, newMovie]
    })
  }

 return(
  <div className={`${theme} main`}>
    <Nav toggleTheme={toggleTheme}/>
    <RandomMovie addMovie={addMovie} />
    <Form addMovie={addMovie}/>
    <FavortieMovies favMovies={favMovies}/>
    
  </div>
 )
}

export default App
