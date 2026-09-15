import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function Navbar(){

    const {color} = useContext(ThemeContext)
    
    return(
        <div className={`navbar ${color}-navbar`}>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Contact</h2>
        </div>
    )
}