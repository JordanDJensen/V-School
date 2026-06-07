export default function Nav(props){

    const {toggleTheme} = props
    return (
        <nav className="nav">
            <h1>Movie Buddy</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </nav>
    )
}