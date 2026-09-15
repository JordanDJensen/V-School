import React from "react"
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'
import Footer from './components/Footer'
import {ThemeContextProvider} from './components/ThemeContext'

function App(props) {

 

  return (
    <>
    <ThemeContextProvider>
      <Navbar/>
      <Main />
      <Footer />
    </ThemeContextProvider>
    </>
  )
}

export default App
