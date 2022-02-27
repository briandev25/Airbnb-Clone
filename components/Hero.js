import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className=' relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[100vh]  '>
        <Image
      src='https://links.papareact.com/0fm' layout='fill' objectFit='cover'
     />
     <div className='absolute top-1/2 w-full text-center'>
         <p className='text-xl md:text-2xl lg:text-4xl'>Not sure where to go? Perfect</p>
         <button className='border-2 py-2 px-6 rounded-full text-lg font-semibold text-purple-500 shadow-md hover:shadow-lg mt-4 bg-white active:scale-90 transition duration-150 '>I'm flexible</button>
     </div>
    </div>
  )
}

export default Hero