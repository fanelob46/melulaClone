import React from 'react'
import logo from './Images/logo.png'
import { RiShoppingCartLine } from "react-icons/ri";
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';



const NavBar = () => {

   // State to manage the navbar's visibility
   const [nav, setNav] = useState(false);

   // Toggle function to handle the navbar's display
   const handleNav = () => {
     setNav(!nav);
   };
 
   // Array containing navigation items
   const navItems = [
     { id: 1, text: 'SHOP' },
     { id: 2, text: 'ABOUT' },
     
   ];

  return (
    <section>
    <nav className='flex justify-between py-12 px-24'>
      <img src={logo} alt="" className='h-11' />

  {/* Logo */}
  

 {/* Desktop Navigation */}
 <ul className='hidden md:flex group'>
        {navItems.map(item => (
          <a className='text-white group-hover:opacity-50 transition-opacity duration-300 hover:!opacity-100'>
<li
            key={item.id}
            className='p-4  rounded-xl m-2 cursor-pointer d relative'
          >
            {item.text}
          </li>
          </a>
          
        ))}
      </ul>

  \{/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
    

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl  duration-300 hover:text-black cursor-pointer '
          >
            {item.text}
          </li>
        ))}
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