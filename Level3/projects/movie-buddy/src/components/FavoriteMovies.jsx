import { useState } from "react"

export default function FavortieMovies(props){
    const {favMovies} = props

    const [movieStyles, setmovieStyles] = useState({
        backgroundColor: 'red',
        color: 'white',
        border: 'solid black 1px'
    })

    function changeTheme(){
        setmovieStyles(prevMovieStyles => {
            return{
                ...prevMovieStyles,
                backgroundColor: 'lightblue',
                color: 'black'
            }
            
        })
    }

    const movieElement = favMovies.map((movie, i) => {
        return(
            <div style={movieStyles} key={i}>
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <p>{movie.rating}</p>
                <button onClick={changeTheme}>Change Theme</button>
            </div>
        )
    })
    return(
        <div>
            {movieElement}
        </div>
    )
}