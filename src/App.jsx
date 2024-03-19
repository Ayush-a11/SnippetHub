import { useState } from 'react'

import './App.css'
import Tabs from './Components/Tabs/Tabs'
import ResponsiveSlideShow from './Components/ResponsiveSlideShow/ResponsiveSlideShow'
import TypingEffect from './Components/TypingEffect/TypingEffect'
import LeftMenuBar from './Components/LeftMenuBar/LeftMenuBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import MoviesPagination from './Components/Pagination/MoviesPagination'
import Accordion from './Components/Accordion/Accordion'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Loader from './Components/CommonUtility/Loader'
import InfiniteScroll from './Components/InfiniteScroll/InfiniteScroll'

function App() {
  const [count, setCount] = useState(0)
  const [devMode,setDevMode] =useState(false)

  return (
    <div className="flex flex-col w-full h-full bg-black">
      
      <Header/>
      <button className="text-textColor"onClick={()=>setDevMode((prev)=>!prev)} ><FontAwesomeIcon className='text-purple-500 text-lg scale-125' icon={devMode?faToggleOn:faToggleOff}/>   Dev Mode</button>
     
      <TypingEffect devMode={devMode}/>
     <div className="relative w-full h-screen my-10  flex bg-accent">
     
      <div className="w-auto h-full text-purple-500">
          <LeftMenuBar/>
      </div>
      <div className="flex-1  h-full bg-black overflow-auto">
      {/* <ResponsiveSlideShow devMode={devMode}/>
      <Tabs devMode={devMode}/>
      <Accordion devMode={devMode}/>
      <MoviesPagination devMode={devMode}/> */}

      <InfiniteScroll devMode={devMode}/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default App
