import { useState } from "react"
import movies from "../movies"

export default function RandomMovie(){
    // let index = 0

    let [index, setIndex] = useState(0)

    function getRandomMovie(){
        const randomIndex = Math.floor(Math.random() * movies.length)
        console.log(movies[randomIndex])
        setIndex(randomIndex)
    }
    function nextMovie(num){
        index += num
        if(index < 0){
            index = movies.length - 1;
        }
        if(index === movies.length){
            index = 0;
        }
        console.log(movies[index])
    }
    return(
        <div>
            <h1>{movies[index].title}</h1>
            <p>Description: {movies[index].description}</p>
            <p>Rating: {movies[index].rating}</p>
            <button onClick={() => nextMovie(-1)}>Prev Movie</button>
            <button onClick={() => nextMovie(1)}>Next Movie</button>
            <button onClick={getRandomMovie}>Random Movie</button>
        </div>
    
    )
}