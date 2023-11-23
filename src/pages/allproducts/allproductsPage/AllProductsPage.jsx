import React, { useContext, useEffect } from 'react'
import myContext from '../../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/CartSlice';
import { toast } from 'react-toastify';

function AllProductsPage() {

    const context = useContext(myContext);
    const { product, searchkey, filterType,
        filterPrice } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const addCart = async (product) => {
        const serializableProduct = {
            ...product, time: product.time.seconds || null,
        }
        dispatch(addToCart(serializableProduct))
        toast.success('Added to cart', {
            autoClose: 1000,
            hideProgressBar: true
        })
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])



    return (
        <div  >
            <div className='  md:mx-20 flex  flex-wrap    mb-10  justify-center gap-3 sm:gap-0 sm:justify-around md:justify-start'>
                {product.filter((obj) => obj.title.toLowerCase().includes(searchkey))
                    .filter((obj) => obj.category.toLowerCase().includes(filterType))
                    .filter((obj) => obj.price.toLowerCase().includes(filterPrice)).map((item, index) => {
                        const { title, price, imageUrl, id } = item;
                        return (
                            <div
                                key={index}
                                className='border border-solid border-gray-200 border-opacity-60 rounded-2xl flex flex-col sm:w-[300px] md:w-1/2 lg:w-1/4 p-4 shadow-md sm:my-4  cursor-pointer ' >
                                <div onClick={() => window.location.href = `/productinfo/${id}`}
                                    className='border border-solid border-gray-100  rounded-xl
                         transition-transform duration-300 ease-in-out hover:scale-105 w-[240px] sm:w-full'>
                                    <img src={imageUrl} alt='img' className='rounded-xl w-full h-[250px]' />
                                </div>

                                <div className=' flex flex-col mt-4 gap-1'>
                                    <div className='font-medium text-sm'>{title}</div>
                                    <div className='font-bold'>₹{price}</div>

                                    <div className=' bg-gray-200 rounded-xl'>
                                        <button
                                            onClick={() => addCart(item)}
                                            className=' w-full text-center rounded-xl font-medium text-gray-800'>
                                            Add To Cart</button>

                                    </div>
                                </div>
                            </div>
                        )
                    })}

            </div>
        </div>
    )
}

export default AllProductsPage
