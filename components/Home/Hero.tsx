import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
          <h2 className='text-[40px] md:text-[60px] 
            font-bold '>Affordable Car <span className='text-blue-600'>Rental</span> in Your Area</h2>
            <h2 className='text-[20px] text-gray-500 pr-20 mt-5'>Looking for a car rental that is easy to use and affordable? Look no further than GoDrive! 
            Book your car today and start your adventure! 💃
            </h2>
            <button className="bg-transparent mt-5 hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
             Explore Cars
            </button>
      </div>
      <div>
      <Image src='/hero.png'
            alt='hero'
            width={400}
            height={500}
            className='w-full object-cover align-middle'
            />
      </div>
    </div>
  )
}

export default Hero