import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CardsContainer() {
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
                breakpoint: 968,
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


    return (
        <div className='flex flex-col  mt-8'>
            <div className=' px-2 md:mx-20'>
                <h2 className='font-medium  text-xl sm:text-2xl'>Our Latest Collection</h2>
            </div>

            <div className=' mx-6 md:mx-20  sm:py-5'>
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div
                            key={index}
                            className='border border-solid border-gray-200 border-opacity-60 rounded-2xl flex flex-col  w-20 p-2 shadow-md my-4 cursor-pointer
                            transition-transform duration-300 ease-in-out hover:scale-105'
                        >
                            <div>
                                <img src={d.img} alt='' className='rounded-xl' />
                            </div>

                            <div className=' mt-2'>
                                <div>{d.title}</div>
                                <div>{d.price}</div>

                                <div className='border border-solid border-black rounded-xl'>
                                    <button className=' w-full text-center rounded-xl'>{d.button}</button>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    );
}

const data = [
    {
        img: 'https://placehold.co/300x300/png',
        title: 'This is title',
        price: '500 Rs',
        button: 'Add To Cart',
    },

    {
        img: 'https://placehold.co/300x300/png',
        title: 'This is title',
        price: '500 Rs',
        button: 'Add To Cart',
    },

    {
        img: 'https://placehold.co/300x300/png',
        title: 'This is title',
        price: '500 Rs',
        button: 'Add To Cart',
    },

    {
        img: 'https://placehold.co/300x300/png',
        title: 'This is title',
        price: '500 Rs',
        button: 'Add To Cart',
    },

    {
        img: 'https://placehold.co/300x300/png',
        title: 'This is title',
        price: '500 Rs',
        button: 'Add To Cart',
    },
    {
        img: 'https://placehold.co/300x300/png',
        title: 'This is title',
        price: '500 Rs',
        button: 'Add To Cart',
    },

    {
        img: 'https://placehold.co/300x300/png',
        title: 'This is title',
        price: '500 Rs',
        button: 'Add To Cart',
    },

    {
        img: 'https://placehold.co/300x300/png',
        title: 'This is title',
        price: '500 Rs',
        button: 'Add To Cart',
    },
];

export default CardsContainer;
