function Navbar(){
const navLink = {
    display: "flex",
    backgroundColor: "green",
    justifyContent: "center"

}

    return(
        <>
        <div className="navbar">
            <ul className="navbar-list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;