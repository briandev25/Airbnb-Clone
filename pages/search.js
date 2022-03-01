import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';


function Search({ searchResults }) {
    const router = useRouter();
   const { location, persons, startDate, endDate } = router.query;

   const ftdStartDate = format(new Date(startDate),'dd MMMM yy')
   const ftdEndDate = format(new Date(endDate),'dd MMMM yy')

  return (
    <div>
        <Header placeholder={`${location} || ${ftdStartDate} || ${ftdEndDate} || ${persons} people`} />
        <main>
            <section className='flex-grow mt-14 mx-6'>
                <p className=' text-xs'>300+ stays for {persons} number of guests between {ftdStartDate} to {ftdEndDate}</p>
                <h1 className=' text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                <div className='hidden lg:flex mb-5 space-x-4'>
                    {["Cancellation Flexibility","Type of place","Price","Rooms and Beds","More filters"].map((title) =>
                     <p key={title} className=' categoryButton '>{title}</p>)}
                    
                </div>
                {searchResults.map((item) =>( 
                <InfoCard  key={item.img} {...item}  />
                ))}
            </section>
        </main>
        <Footer />
    </div>
    
  )
}

export default Search;


export async function getServerSideProps(){
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());
    return{
        props:{
            searchResults
        }
    }
}