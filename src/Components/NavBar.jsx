import React from 'react'
import logo from './Images/logo.png'
import { RiShoppingCartLine } from "react-icons/ri";


const NavBar = () => {
  return (
    <section>
    <nav className='flex justify-between py-12 px-24'>
      <img src={logo} alt="" className='h-11' />
  
      <ul className='flex gap-3 text-white font-bold group'>
        <li className='relative'>
          <a href="#" className='text-white group-hover:opacity-50 transition-opacity duration-300 hover:!opacity-100'>
            SHOP
          </a>
        </li>
        <li className='relative'>
          <a href="#" className='text-white group-hover:opacity-50 transition-opacity duration-300 hover:!opacity-100'>
            ABOUT
          </a>
        </li>
      </ul>
   <div className='relative'>
   <RiShoppingCartLine className='text-white size-7' />
   <span className='absolute -top-1 -right-3  bg-orange-200 text-white text-xs font-bold rounded-full px-[9px] py-1'>
    0
  </span>
   </div>
    </nav>
  </section>
  

  )
}

export default NavBar