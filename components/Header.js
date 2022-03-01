import Image from 'next/image'
import React,{ useState } from 'react'
import { SearchIcon,MenuIcon,UserCircleIcon,GlobeAltIcon,PlusIcon,MinusIcon} from '@heroicons/react/solid'

import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({ placeholder}) {
const [searchInput,setSearchInput] = useState('');
const [startDate,setStartDate] = useState(new Date());
const [endDate,setEndDate] = useState(new Date());
const [noOfAdults,setNoOfAdults] = useState(0);
const [noOfChildren,setNoOfChildren]=useState(0);

const router = useRouter();

const selectionRange ={
  startDate,
  endDate,
  key:'selection'
}

const handleSelect = (ranges) =>{
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
}
const noOfPersons = () => noOfAdults + noOfChildren
const searchNavigator =()=>(
     router.push({
       pathname:'/search',
       query:{
         location:searchInput,
         startDate:startDate.toISOString(),
         endDate:endDate.toISOString(),
         persons:noOfPersons()
       }
     })
);
  return (
    <header className='sticky grid grid-cols-1 md:grid-cols-3 justify-between  top-0 z-50 bg-white shadow-md p-5 md:px-10'>
     {/* left  */}
     <div onClick={() => router.push('/')} className='hidden relative md:flex items-center h-10 cursor-pointer my-auto '>
        <Image src ='https://links.papareact.com/qd3' layout='fill' objectFit='contain' objectPosition='left m-w-full '  />
     </div>
     {/* center */}
     <div className='flex flex-1 items-center border-2 md:shadow-sm rounded-full relative px-5 py-3 md:p-0 bg-gray-200 md:bg-transparent '>
         <input type='text' placeholder={placeholder ? placeholder : 'Start your search'}  value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
          className='flex-grow pl-5 rounded-full placeholder:text-gray-400 placeholder:font-semibold placeholder:text-center outline-none bg-transparent ' />
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
      {searchInput && <div className=' flex flex-col col-span-3 mx-auto   mt-2'>
         <div>
         <DateRangePicker
        className='w-full'
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#FD5B61"]}
        onChange={handleSelect}
         />
         </div>
        <div>
            <h2 className=' text-lg font-semibold mb-3'>Add Guests</h2>
            <div className='flex flex-col md:flex-row justify-between px-1 py-6 border-y'>
                 {/* Adults */}
                <div className='flex items-center justify-between mb-4 md:mb-0 space-x-7'>
                  <h3 className=' text-gray-600 text-lg'>Adults</h3>
                  <div className='flex items-center bg-gray-50 rounded-full p-3 space-x-8'>
                    <PlusIcon onClick={() =>setNoOfAdults(noOfAdults + 1)} className='h-11 bg-gray-100 rounded-full p-3 text-gray-600 cursor-pointer shadow-md' />
                     <span>{noOfAdults}</span>
                    <MinusIcon onClick={() =>{
                        if(noOfAdults >0){
                          return setNoOfAdults(noOfAdults-1);
                        }else{
                          return setNoOfAdults(0);
                        }
                    }}  className='h-11 bg-gray-100 rounded-full p-3 text-gray-600 cursor-pointer shadow-md' />
                  </div>
                </div>
                 {/* children */}
                <div className='flex items-center justify-between space-x-7'>
                  <h3 className=' text-gray-600 text-lg'>Children</h3>
                  <div className='flex items-center bg-gray-50 rounded-full p-3 space-x-8'>
                    <PlusIcon onClick={() =>setNoOfChildren(noOfChildren + 1)} className='h-11 bg-gray-100 rounded-full p-3 text-gray-600 cursor-pointer shadow-md' />
                     <span>{noOfChildren}</span>
                     <MinusIcon onClick={() =>{
                        if(noOfChildren >0){
                          return setNoOfChildren(noOfChildren-1);
                        }else{
                          return setNoOfChildren(0);
                        }
                    }} className='h-11 bg-gray-100 rounded-full p-3 text-gray-600 cursor-pointer shadow-md' />
                  </div>
                </div>
            </div>
            <div className='flex mt-6'>
              <button onClick={() => setSearchInput('')} className='flex-grow text-gray-500'>Cancel</button>
              <button onClick={searchNavigator} className='flex-grow text-red-400'>Search</button></div>
        </div>  
         </div> }
    </header>
  )
}

export default Header