import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";




const Footer = () => {
  return (
    <section className='bg-blue-950 h-96 '>
<div className='text-center'>
    <p className='text-white'><span className='text-green-400'> Melula</span>11 Dannevirkegade, København, 1763, Denmark hello@melula.com </p>
</div>
<div className='flex justify-center'>
<FaInstagram />
<FaFacebookF />
<FaPinterest />


</div>
    </section>
    
  )
}

export default Footer