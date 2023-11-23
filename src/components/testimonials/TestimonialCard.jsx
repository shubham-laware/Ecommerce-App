import React from 'react'


function TestimonialCard({ description, name }) {

    return (

        
        <div className='bg-gray-100 border border-solid border-gray-200 border-opacity-60 rounded-2xl flex flex-col items-center text-justify p-4 shadow-md my-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 w-full h-[280px] sm:h-[250px]   ' >
            <div>
                {description}
            </div>
            <div className='mt-auto'>
                {name}
            </div>
        </div>
    )
}

export default TestimonialCard
