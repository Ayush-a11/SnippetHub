import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import {Outlet} from 'react-router-dom'
import Home from './Components/Home/Home'


function App() {
  const [count, setCount] = useState(0)
  const [devMode,setDevMode] =useState(false)
  const state=false;
  return (
    <div className="flex flex-col w-full h-full bg-light  dark:bg-background">
      
      <Header/>
      <button className="text-textColor"onClick={()=>setDevMode((prev)=>!prev)} >
        <FontAwesomeIcon className='text-purple-500 text-lg scale-125' icon={devMode?faToggleOn:faToggleOff}/>   Dev Mode</button>
      
        <Outlet/>
        {/* <Home/> */}
    <Footer/>
    </div>
  )
}

export default App
