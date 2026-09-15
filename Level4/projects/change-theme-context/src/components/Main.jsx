import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function Main(){

    const {color, toggleTheme} = useContext(ThemeContext)



    return(
        <div className={`main ${color}-main`}>
            <h1>Click the Button to Toggle the {`${color}`} Theme!</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}