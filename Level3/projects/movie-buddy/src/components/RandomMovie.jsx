import { useState } from "react"
import movies from "../movies"

export default function RandomMovie(props){
    // let index = 0

    const {addMovie} = props

    let [movieIndex, setIndex] = useState(0)
    const [showDetails, setShowDetails] = useState(true)

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

    function toggleDetails(){
        setShowDetails(!showDetails)

    }

    return(
        <div className="random-movie-container">
            <h2>Random Movie</h2> 
            <h1>{movies[movieIndex].title}</h1>

        {showDetails && (

            <>
             <p>Description: {movies[movieIndex].description}</p>
             <p>Rating: {movies[movieIndex].rating}</p>
            </>
        )
           
        }

            <button onClick={() => nextMovie(-1)}>Prev Movie</button>
            <button onClick={() => nextMovie(1)}>Next Movie</button>
            <button onClick={getRandomMovie}>Random Movie</button>
            <button onClick={toggleDetails}>{showDetails ? "Hide Details" : "Show Details"}</button>
            <div><button onClick={() => addMovie(movies[movieIndex])}>Save Movie</button></div>
        </div>
    
    )
}