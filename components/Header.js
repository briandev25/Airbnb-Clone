import Image from 'next/image'
import React,{ useState } from 'react'
import { SearchIcon,MenuIcon,UserCircleIcon,GlobeAltIcon} from '@heroicons/react/solid'

import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

import { DateRangePicker } from 'react-date-range';

function Header() {
const [searchInput,setSearchInput] = useState('');
const [startDate,setStartDate] = useState(new Date());
const [endDate,setEndDate] = useState(new Date());

const selectionRange ={
  startDate,
  endDate,
  key:'selection'
}

const handleSelect = (ranges) =>{
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
}
  return (
    <header className='sticky grid grid-cols-1 md:grid-cols-3 justify-between  top-0 z-50 bg-white shadow-md p-5 md:px-10'>
     {/* left  */}
     <div className='hidden relative md:flex items-center h-10 cursor-pointer my-auto '>
        <Image src ='https://links.papareact.com/qd3' layout='fill' objectFit='contain' objectPosition='left m-w-full '  />
     </div>
     {/* center */}
     <div className='flex flex-1 items-center border-2 md:shadow-sm rounded-full relative px-5 py-3 md:p-0 bg-gray-200 md:bg-transparent '>
         <input type='text' placeholder='Start your search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
          className='flex-grow pl-5 rounded-full placeholder:text-black placeholder:font-semibold placeholder:text-center outline-none bg-transparent ' />
         <SearchIcon className='hidden md:inline-flex h-8 bg-[#ff385c] text-white rounded-full p-2  cursor-pointer m-2 ' />
     </div>
      {/* right */}
      <div className='hidden md:flex items-center justify-end space-x-6 mr-5 '>
         <p className=' font-semibold  hover:bg-gray-50 px-4 rounded-full py-2 cursor-pointer'>Become a Host</p>
         <GlobeAltIcon className='h-12 cursor-pointer text-gray-700 rounded-full p-2 hover:bg-gray-50 ' />
         <div className='flex items-center space-x-2 border-2 rounded-full p-2 cursor-pointer hover:shadow-md '>
           <MenuIcon className='h-5' />
           <UserCircleIcon className='h-8 text-gray-600 ' />
         </div>
      </div>
      {searchInput && <div><DateRangePicker

        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#FD5B61"]}
        onChange={handleSelect}
         /></div> }
    </header>
  )
}

export default Header