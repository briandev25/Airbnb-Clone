import Image from 'next/image'
import React from 'react'

function Card({ img,title}) {
  return (
    <div className='m-3 cursor-pointer hover:scale-105 transform transition duration-150 ease-out'>
        <div className='relative w-[239px] h-[345px]'>
            <Image src={img} className='rounded-lg' layout='fill' />
        </div>
        <div>
            <h2 className=' text-2xl mt-3'>{title}</h2>
        </div>
    </div>
  )
}

export default Card