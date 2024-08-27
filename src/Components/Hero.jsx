import React from 'react'
import NavBar from './NavBar'

const Hero = () => {
  return (
    <div className='bg-hero bg-center bg-cover h-[750px] '>
    <NavBar/>
    <div className=' pt-36'>





        <div className='flex justify-center px-30'>
            <div className='font-medium '>
                <div className='leading-none'>
                <h1 className='text-[67px] text-white '>
            FOR COLOURFUL 
        </h1>
                </div>
            <div className='leading-none'>
            <h1 className='text-[67px] text-white  px-10  pb-2'>
             STEPS IN LIFE
        </h1>
            </div>
        
            </div>
        
        </div>
       <div className='flex justify-center pt-7'>
       <button className='bg-[#0df8ad] text-md text-white rounded-full py-5 px-8 hover:opacity-75 font-semibold'>
            VISIT OUR SHOP
        </button>
       </div>
        
    </div>
    </div>
  )
}

export default Hero