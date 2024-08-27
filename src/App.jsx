import { useState } from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
    </>
  )
}

export default App
