import {doc, getDoc,collection } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fireDB } from '../../firebase/FirebaseConfig';
import { useSelector } from 'react-redux';
import myContext from '../../context/data/myContext';

function Navbar() {
    const user=JSON.parse(localStorage.getItem('user'));
    const [name,setName]=useState('')

    const context=useContext(myContext)

    const {getOrderData}=context;

    const logout=()=>{
        localStorage.clear('user');
        window.location.href='/login';
        
    }


    useEffect(()=>{
        const setUserName=async()=>{
            try {
                const collectionRef=collection(fireDB,"users");
    
            const userIdRef=doc(collectionRef,user.user.uid);
    
            let userData=await getDoc(userIdRef);
    
            if(userData.exists()){
               const fullName=userData.data().name
               const firsName=fullName.split(' ')[0];
               setName(firsName);
            }
            else{
                setName('User123')
            }
                
            } catch (error) {
                console.log('Error fetching data',error)
            }
            
        }

        if(user) setUserName();
    },[user])
   

    const cartItems=useSelector((state)=>state.cart)


    return (
        <nav className=' bg-gray-100 shadow-lg lg:h-16 fixed top-0 z-50' style={{ width: '100%'}}>
            
            <div className=' flex py-1 sm:py-2  lg:my-1 ' >

                <div className=' sm:ml-4  flex justify-center'>
                    <Link to={"/"}>
                        <img src="/Company Logo.png" alt="logo" className=' w-70 h-[40px]' />
                    </Link>

                </div>

                <div className='flex w-full  lg:justify-end sm:mr-3'>
                    <div className='  w-full lg:w-1/2  flex justify-end sm:ml-auto'>
                        <div className=' border border-solid border-gray-300 sm:border-none bg-gray-100 py-1 sm:py-0 w-full sm:w-3/4 flex justify-between sm:justify-around px-2 items-center absolute sm:relative sm:block   top-10 sm:top-0 sm:flex font-medium'>

                            <div>
                                <Link to={"/allproducts"}> All Products</Link>
                            </div>

                            <div >
                                <Link to={"/order"} onClick={getOrderData}>Order</Link>
                            </div>

                            <div >
                                <Link to={"/cart"}>
                                    <div className='flex gap-1 items-center'>
                                        <div>
                                        <img src="/shopping-cart-svgrepo-com.svg" alt="cart" className='h-8 ' />
                                        </div>

                                        <div>
                                            {cartItems.length}
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {user?.user?.email==='lawareshubham647@gmail.com' ? <div>
                                <Link to={"/dashboard"}>Admin</Link>
                            </div>:"" }
                            

                        </div>

                        <div className=' w-3/4 sm:w-1/4  flex items-center justify-evenly sm:justify-around' >

                            <div className='font-medium'>
                                {name}
                            </div>
                            <div className='font-medium cursor-pointer'>
                                <a onClick={logout} >Logout</a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
