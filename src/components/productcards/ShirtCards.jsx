import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';
import { toast } from 'react-toastify';


function ShirtCards() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2200,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 1750,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1152,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1
                }
            }



        ]
    };

    const context = useContext(myContext);
    const { product } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const addCart = (product) => {
        const serializableProduct = {
            ...product, time: product.time.seconds,
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

    console.log(product)


    const shirtProducts = product.filter((item) => item.category === 'shirts')
    const sortedProducts = [...shirtProducts].sort((a, b) => (b.time) - (a.time))

    const limitedProducts = sortedProducts.slice(0, 8)


    return (
        <div className='flex flex-col  mt-8'>

            <div className=' px-2 md:mx-20'>
                <h2 className='font-bold text-center sm:text-start  text-xl sm:text-2xl mb-8'>Our Latest Collection</h2>
            </div>

            <div className=' px-2 md:mx-20'>
                <h2 className='font-medium text-center sm:text-start text-xl sm:text-2xl'>Shirts</h2>
            </div>

            <div className=' mx-6 md:mx-20  sm:py-5'>
                <Slider {...settings}>
                    {limitedProducts.map((item, index) => {
                        const { title, price, description, imageUrl, id } = item;
                        return (
                            <div
                                key={index}
                                className='border border-solid border-gray-200 border-opacity-60 rounded-2xl flex flex-col  w-20 p-4 shadow-md my-4 cursor-pointer
                                transition-transform duration-300 ease-in-out hover:scale-105  ' >

                                <div onClick={() => window.location.href = `/productinfo/${id}`}
                                    className='border border-solid border-gray-100  rounded-xl '>
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
                </Slider>

            </div>
        </div>
    );
}


export default ShirtCards;
