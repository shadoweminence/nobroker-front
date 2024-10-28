import { useState } from 'react'

import './App.css'
import Navb from './components/Navbar/Navb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navb/>
    </>
  )
}

export default App
