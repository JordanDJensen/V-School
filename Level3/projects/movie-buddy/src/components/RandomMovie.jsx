import { useState } from "react"
import movies from "../movies"

export default function RandomMovie(){
    // let index = 0

    let [movieIndex, setIndex] = useState(0)

    function getRandomMovie(){
        const randomIndex = Math.floor(Math.random() * movies.length)
        console.log(movies[randomIndex])
        setIndex(randomIndex)
    }
    function nextMovie(num){
      setIndex(prevMovieIndex =>{
            const newIndex = prevMovieIndex + num

            if(newIndex < 0){
                return movies.length - 1
            } else if (newIndex === movies.length){
                return 0
            } else {
                return newIndex
            }
      })
    }
    return(
        <div>
            <h1>{movies[movieIndex].title}</h1>
            <p>Description: {movies[movieIndex].description}</p>
            <p>Rating: {movies[movieIndex].rating}</p>
            <button onClick={() => nextMovie(-1)}>Prev Movie</button>
            <button onClick={() => nextMovie(1)}>Next Movie</button>
            <button onClick={getRandomMovie}>Random Movie</button>
        </div>
    
    )
}