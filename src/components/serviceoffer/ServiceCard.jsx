import React from 'react'

function ServiceCard({title,desc,img}) {
  return (
    <div className='border border-solid border-gray-200 border-opacity-60 rounded-md w-full sm:w-1/2 flex flex-col items-center py-2 sm:mt-4 sm:mb-4  gap-2 bg-gray-100 shadow-md'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='font-medium'>
                    {title}
                </div>
                <div className='text-sm'>
                    {desc}
                </div>
            </div>
  )
}

export default ServiceCard
