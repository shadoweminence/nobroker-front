import { useState } from 'react'

import './App.css'
import Navb from './components/Navbar/Navb'
import Homepage from './components/FrontPage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navb/>
     <Homepage/>
    </>
  )
}

export default App
