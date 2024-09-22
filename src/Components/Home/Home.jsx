import { useState } from 'react'

import Tabs from '../../Components/Tabs/Tabs'
import ResponsiveSlideShow from '../../Components/ResponsiveSlideShow/ResponsiveSlideShow'
import TypingEffect from '../../Components/TypingEffect/TypingEffect'
import LeftMenuBar from '../../Components/LeftMenuBar/LeftMenuBar'
import Accordion from '../../Components/Accordion/Accordion'

import InfiniteScroll from '../../Components/InfiniteScroll/InfiniteScroll'
import Drag_N_Drop from '../Drag_N_Drop/Drag_N_Drop'
import PaymentCard from '../Payment/PaymentCard'
function Home() {
  const [count, setCount] = useState(0)
  const [devMode,setDevMode] =useState(false)
  const state=false;
  return (
	<>
	 <TypingEffect devMode={devMode}/>
     <div className="relative w-full  my-10  flex justify-center">
     
      <div className="w-auto h-full text-purple-500 justify-self-start">
          <LeftMenuBar/>
      </div>
      <div className=" w-11/12 h-full  overflow-auto">
      <ResponsiveSlideShow devMode={devMode}/>
      <Tabs devMode={devMode}/>
      <Accordion devMode={devMode}/>
      {/* <MoviesPagination devMode={devMode}/> */}
      <InfiniteScroll devMode={devMode}/>
      <Drag_N_Drop devMode={devMode}/>
      <PaymentCard/>
      </div>
    </div>
	</>
  )
}

export default Home