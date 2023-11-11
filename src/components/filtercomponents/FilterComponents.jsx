import React from 'react'

function FilterComponents() {
  return (
    <div className='mt-2 sm:mt-5  md:mx-20 bg-gray-100 rounded-md  shadow-md'> 

      <div className='flex flex-col py-5 gap-2'>
        <div className=' bg-white flex  mx-5 p-1 rounded-md'>

          <div className=' flex items-center' >
            <img src="/search_logo.jpg " alt="img" 
            className='w-8 '/>
          </div>

          <div className=' w-full '>
            <input type="text" className=' w-full py-1 outline-none'
            placeholder='Search here'
            />
          </div>
        </div>

        <div className=' flex mx-5 p-1 justify-between font-medium'>

          <div>
            Filters
          </div>

          <div className='text-sm'>
            <button>Reset filter</button>
          </div>

        </div>

        <div className='flex mx-5 gap-3'>

          <div className=' bg-white w-1/2 sm:w-1/4  sm:px-2 py-1 rounded-md flex'>
            <select >
              <option value="jacket">Jacket</option>
              <option value="shirt">Shirts</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>

          <div className='bg-white w-1/2 sm:w-1/4 sm:px-2 py-1 rounded-md'>
            
          <select >
              <option value="jacket">Jacket</option>
              <option value="shirt">Shirts</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>

        </div>

      </div>

    </div>
  )
}

export default FilterComponents
