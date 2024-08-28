import React from 'react'
import img from './Images/555.png'
import img2 from './Images/image-asset.jpeg'
import img3 from './Images/image-asset2.jpeg'

const Talk = () => {
  return (
<>
    <section className=' h-[25vh]'>


<div className='pt-14 '>
<h1 className='text-center text-blue-800 text-3xl'>They talk about us</h1>
</div>


<div className='flex justify-center '>

<img src={img} alt="" />

        </div>

<div className='flex justify-center '>
<hr className='w-[80%] px-10' />
</div>
    



 
    </section>


    <section className='h-[75vh]'>
<div className='text-3xl text-blue-900 pt-28 pl-32'>
    <p>Follow us Follow us on Instagram <span className='underline'>@melula_copenhagen</span></p>
</div>



<div className='flex  '>

<div className='flex space-x-2  pt-9 pl-32  '>
<div>
    <img className='h-96'  src= {img2} alt="" />
</div>
<div>
    <img className='h-96'  src= {img3} alt="" />
</div>

</div>

<div className="text-center space-x-28  ">
    
<h1 className='text-3xl pl-16'>Subscibe</h1>
<p className='pt-5'> Sign up with your email address to receive news and updates.</p>

<div className='flex justify-center py-6'>
<input className='pl-4 pr-12 py-3 border-2 border-gray-100' type="email" placeholder="E-mailadresse" name="email">
    </input>
    <div className=" pl-1">
    <button className="bg-[#0df8ad] text-md text-white rounded py-5 px-8 hover:opacity-75 font-semibold">SIGN UP</button>
    </div>
   

</div>
<p>We respect your privacy.</p>
   
    
</div>

</div>








    </section>
    </>



  )
}

export default Talk