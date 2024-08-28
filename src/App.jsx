import { useState } from 'react'
import Hero from './Components/Hero'
import Productss from './Components/Productss'
import About from './Components/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Productss/>
      <About/>
    </>
  )
}

export default App
