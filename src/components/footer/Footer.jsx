import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className='bg-gray-100 flex flex-col  sm:py-5 '>

        <div className='  flex flex-col  gap-4 sm:gap-0 sm:flex-row  sm:mx-20 py-5'>

          <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row  sm:w-3/4  mx-auto'>

            <div className=' sm:w-1/2 '>
              <h2 className='font-medium'>
                Categories
              </h2>
              <div className='flex flex-col gap-1 text-gray-600 text-sm my-1'>
                <div>
                  <Link to={"/"}>Home</Link>
                </div>
                <div>
                  <Link to={"/order"}>Order</Link>
                </div>
                <div>
                  <Link to={"/cart"}>Cart</Link>
                </div>
              </div>
            </div>


            <div className=' sm:w-1/2'>
              <h2 className='font-medium'>
                Customer Service
              </h2>

              <div className='flex flex-col gap-1 text-gray-600 text-sm my-1'>
                <div >
                  <Link to={"/returnpolicy"}>Return Policy</Link>
                </div>
                <div>
                  <Link to={"/aboutUs"}>About Us</Link>
                </div>
                <div>
                  <Link to={"/contactUs"}>Contact Us</Link>
                </div>
              </div>
            </div>

            <div className='w-1/2'>
              <h2 className='font-medium'>
                Services
              </h2>
              <div className='text-gray-600 text-sm my-1  '>
                <Link to={"/privacy"}>Privacy</Link>
              </div>
            </div>

          </div>

          <div className=' w-1/2 sm:w-1/4  flex justify-center mx-auto'>
            <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
          </div>
        </div>

        <div className=' py-4'>
          <p className="text-sm text-gray-600 text-center">
            &copy; Copyright 2023. All Rights Reserved by MyApp.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
