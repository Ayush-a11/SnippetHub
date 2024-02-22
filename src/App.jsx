import { useState } from 'react'

import './App.css'
import Tabs from './assets/Components/Tabs/Tabs'
import ResponsiveSlideShow from './assets/Components/ResponsiveSlideShow/ResponsiveSlideShow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-full flex bg-accent">
      <div className="w-1/3 text-purple-500">
          left side content
      </div>
      <div className="w-2/3 h-full bg-black mt-16 pb-16">
      <ResponsiveSlideShow/>
      <Tabs/>
      </div>
    </div>
  )
}

export default App
