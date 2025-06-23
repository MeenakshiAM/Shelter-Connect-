import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'

function App() {
 return(
 
      <>
        <Header/>
        <Home/>
        <Footer/>
      </>

);


}

export default App
