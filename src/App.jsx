import { useState } from 'react'

import './App.css'
import Tabs from './assets/Components/Tabs/Tabs'
import ResponsiveSlideShow from './assets/Components/ResponsiveSlideShow/ResponsiveSlideShow'
import TypingEffect from './assets/Components/TypingEffect/TypingEffect'
import LeftMenuBar from './assets/Components/LeftMenuBar/LeftMenuBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0)
  const [devMode,setDevMode] =useState(false)

  return (
    <div className="flex flex-col w-full h-full bg-black">

      <button className="text-textColor"onClick={()=>setDevMode((prev)=>!prev)} ><FontAwesomeIcon className='text-purple-500 text-lg scale-125' icon={devMode?faToggleOn:faToggleOff}/>   Dev Mode</button>
      
      <TypingEffect devMode={devMode}/>
     <div className="relative w-full h-full flex bg-accent">
      <div className="w-auto text-purple-500">
          <LeftMenuBar/>
      </div>
      <div className="flex-1 h-full bg-black  ">
      <ResponsiveSlideShow devMode={devMode}/>
      <Tabs devMode={devMode}/>
      </div>
    </div>
    </div>
  )
}

export default App
