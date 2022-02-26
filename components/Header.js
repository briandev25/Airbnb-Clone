import Image from 'next/image'
import React from 'react'
import { SearchIcon} from '@heroicons/react/solid'

function Header() {
  return (
    <header className='sticky grid grid-cols-3 top-0 z-50 bg-white shadow-md p-5 md:px-10'>
     {/* left  */}
     <div className='relative flex items-center h-10 cursor-pointer my-auto '>
        <Image src ='https://links.papareact.com/qd3' layout='fill' objectFit='contain' objectPosition='left' />
     </div>
     {/* center */}
     <div className='flex items-center md:border-2 md:shadow-sm rounded-full relative '>
         <input type='text' placeholder='Start your search' className='flex-grow pl-5 rounded-full placeholder:text-black placeholder:font-semibold outline-none bg-transparent ' />
         <SearchIcon className='hidden md:inline-flex h-8 bg-[#ff385c] text-white rounded-full p-2  cursor-pointer m-2 ' />
     </div>
      {/* right */}
      <div>

      </div>
    </header>
  )
}

export default Header