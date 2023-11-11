import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className=' bg-gray-100 shadow-xl lg:h-16 fixed top-0 z-50' style={{ width: '100%'}}>
            <div className=' flex py-1 sm:py-2  lg:my-1 ' >

                <div className='sm:ml-4 '>
                    <Link to={"/"}>
                        <h1 className='font-bold px-2 py-1 sm:text-2xl'>MyApp</h1>
                    </Link>

                </div>

                <div className=' flex w-full  lg:justify-end sm:mr-3'>
                    <div className='w-full lg:w-1/2  flex justify-end sm:ml-auto'>
                        <div className=' flex justify-around w-3/4 items-center hidden sm:flex font-medium'>

                            <div>
                                <Link to={"/allproducts"}> All Products</Link>
                            </div>

                            <div>
                                <Link to={"/order"}>Order</Link>
                            </div>

                            <div >
                                <Link to={"/cart"}>
                                    <div className='flex gap-1 items-center'>
                                        <div>
                                        <img src="/shopping-cart-svgrepo-com.svg" alt="cart" className='h-8 ' />
                                        </div>

                                        <div>
                                            0
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <Link to={"/dashboard"}>Admin</Link>
                            </div>




                        </div>

                        <div className=' w-1/2 sm:w-1/4  flex items-center justify-evenly sm:justify-around' >

                            <div>
                                Img
                            </div>
                            <div className='font-medium'>
                                <Link to={"/login"}>Login</Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
