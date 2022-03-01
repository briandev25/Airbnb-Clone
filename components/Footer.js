import React from 'react'

function Footer() {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-4 gap-y-10 bg-gray-100 px-20 py-12'>
        <div className=' space-y-4 text-sm text-gray-800'>
            <h5 className=' text-red-500 text-xl font-bold mb-3'>About</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb plus</p>
            <p>Airbnb luxe</p>
        </div>
        <div className=' space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold mb-3 text-red-500 text-xl'>Community</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Pretty awesome clone</p>
            <p>Refferals accepted</p>
            <p>briandev@25</p>
        </div>
        <div className=' space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold mb-3 text-red-500 text-xl'>Host</h5>
            <p>briandev25</p>
            <p>Like it</p>
            <p>comments</p>
            <p>Hire me</p>
            <p>Other projects</p>
        </div>
        <div className=' space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold mb-3 text-red-500 text-xl'>Support</h5>
            <p>Help Center</p>
            <p>Trust and safety</p>
            <p>Easter Eggs</p>
            <p>For the win</p>
            <p>Follow me</p>
        </div>
    </div>
  )
}

export default Footer