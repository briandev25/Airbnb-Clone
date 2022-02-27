import Image from 'next/image';
import React from 'react'

function LargeCard({ img,title,description,buttonText}) {
  return (
    <section className='relative py-16'>
        <div className='relative h-96 max-w-full '>
            <Image src={img} layout="fill" objectFit='cover' alt='' className='rounded-lg' />
        </div>
        <div className='absolute top-32 left-12 '>
            <h3 className=' text-3xl md:text-4xl mb-3 w-64'>{title}</h3>
            <p>{description}</p>
            <button className=' bg-gray-900 text-white text-sm px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
        </div>  
    </section>
  )
}

export default LargeCard;