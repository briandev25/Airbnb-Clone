import Image from 'next/image'
import React from 'react'

function SmallCard({ img,location,distance}) {
  return (
    <div className='flex items-center p-3 hover:bg-gray-50 rounded-lg m-1 cursor-pointer space-x-4 hover:scale-105 transition transform duration-200 ease-out '>
        <div className='relative w-16 h-16'>
            <Image src={img} alt='' layout='fill'className='rounded-lg' />
        </div>
        <div>
           <h2>{location}</h2>
           <h3 className='text-gray-500 '>{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard;