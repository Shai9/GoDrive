import React from 'react'

function CarsFiltersOption() {
  return (
    <div className='mt-10 flex items-center justify-between'>
      <div>
        <h2 className='text-[30px] font-bold'>Cars Catalogue</h2>
        <h2>Explore cars you might like</h2>
      </div>
      <div className='flex gap-5'>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Price</option>
            <option>100$</option>
            <option>200$</option>
          </select>
          <select className="select select-bordered md:block w-full max-w-xs">
            <option disabled selected>Manufacturer</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>Mazda</option>
            <option>Mitsubishi</option>
          </select>
      </div>
    </div>
  )
}

export default CarsFiltersOption