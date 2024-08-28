import { useState } from 'react'
import Hero from './Components/Hero'
import Productss from './Components/Productss'
import About from './Components/About'
import About_products from './Components/About_products'
import Talk from './Components/Talk'
import Footer from './Components/Footer'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Productss/>
      <About/>
      <About_products/>
      <Talk/>
      <Footer/>
     
    </>
  )
}

export default App
