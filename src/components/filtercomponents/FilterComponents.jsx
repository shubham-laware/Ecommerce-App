import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function FilterComponents() {

  const context = useContext(myContext);

  const { searchkey, setSearchkey, filterType, setFilterType,
    filterPrice, setFilterPrice, product } = context

    const uniqueCategoriesSet=new Set();
    product.forEach((item)=>{
      uniqueCategoriesSet.add(item.category)
      
    })

    
    const uniqueCategoriesArray=[...uniqueCategoriesSet];


    const uniquePriceSet=new Set();
    product.forEach((item)=>{
      uniquePriceSet.add(item.price);
    })

    const uniquePriceArray=[...uniquePriceSet]

    const sortedPrice=uniquePriceArray.sort((a,b)=>a-b)

    const resetFilter=()=>{
      setSearchkey("");
      setFilterType("");
      setFilterPrice("");
    }


  return (
    <div className='mt-24 sm:mt-24 mb-16  md:mx-20 bg-gray-100 rounded-md  shadow-md'>

      <div className=' flex flex-col py-5 gap-2 '>
        <div className=' bg-white flex  mx-5 p-1 rounded-md'>

          <div className=' flex items-center' >
            <img src="/search_logo.jpg " alt="img"
              className='w-8 ' />
          </div>

          <div className=' w-full '>
            <input type="text"
              value={searchkey}
              onChange={(e) => setSearchkey(e.target.value)}
              className=' w-full py-1 outline-none'
              placeholder='Search here'
            />
          </div>
        </div>

        <div className=' flex mx-5 p-1 justify-between font-medium'>

          <div>
            Filters
          </div>

          <div className='text-sm'>
            <button onClick={resetFilter}>Reset filter</button>
          </div>

        </div>

        <div className='flex mx-5 gap-3'>

          <div className='bg-white w-1/2 sm:w-1/4  sm:px-2 py-1 rounded-md flex justify-between'>
            <div className='hidden sm:flex'>
              Category
            </div>
            <select value={filterType}
            onChange={(e)=>setFilterType(e.target.value)}
            className='cursor-pointer  w-full sm:w-16'>
              {uniqueCategoriesArray.map((category, index) => {
                return (
                  <option key={index} value={category} >{category}</option>
                )
              })}
            </select>
          </div>

          <div className='bg-white w-1/2 sm:w-1/4 sm:px-2 py-1 flex justify-between rounded-md'>
            <div className='hidden sm:flex'>
              Price
            </div>
            <select value={filterPrice}
            onChange={(e)=>setFilterPrice(e.target.value)}
            className='cursor-pointer w-full sm:w-14' >

              {sortedPrice.map((price, index) => {
                return (
                  <option key={index} value={price}>{price}</option>
                )
              })}
            </select>
          </div>

        </div>

      </div>

    </div>
  )
}

export default FilterComponents
