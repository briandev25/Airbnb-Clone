import Image from 'next/image'
import React from 'react'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

function InfoCard({image,location,title,description,star,price,total}) {
  return (
    <div className=' hover:bg-gray-50 flex  py-7 px-2 border-b cursor-pointer hover:shadow-lg group'>
        <div className='relative h-24 w-40 md:h-[200px] md:w-[300px] group-hover:scale-90 transition transform duration-200 ease-out' >
            <Image src={image} layout='fill' objectFit='cover' className=' rounded-2xl' />
        </div>
        <div className='flex flex-col flex-grow flex-1 pl-6 py-2 pr-2'>
          <div className='flex justify-between '>
              <p className=' text-lg text-gray-700'>{location}</p>
              <HeartIcon className='h-7  active:text-red-500 cursor-pointer'/>
          </div>
          <h4 className=' text-xl text-gray-800 font-semibold'>{title}</h4>
          <p className='pt-2 text-gray-500 flex-grow'>{description}</p>
          <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-1' >
              <p><StarIcon className='h-5 pr-1 text-red-500' /></p>
              {star}
              </div>
              <div className='flex flex-col items-center'>
                  <p className=' text-xl font-semibold pb-2'>{price}</p>
                  <p className=' text-gray-500'>{total}</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default InfoCard