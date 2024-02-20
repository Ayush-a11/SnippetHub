import { useState } from 'react'

import './App.css'
import Tabs from './assets/Components/Tabs/Tabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tabs/>
    </>
  )
}

export default App
