function Main(){

     const username = "John Doe"
  const nameStyle ={
    fontStyle: "italic",
    color: "blue"

  }

    return(
        <div className="main-content">
             <h1 style={nameStyle}>Welcome, {username}</h1>
        </div>
    )
}

export default Main;