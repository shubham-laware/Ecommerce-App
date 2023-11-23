import React from 'react'
import TestimonialCard from './TestimonialCard'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {
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
        <div className='mb-10'>
            <h2 className='text-center text-2xl font-medium'>
                What our <span className='underline text-red-400'> customers</span> say
            </h2>
            <div className=' mx-6 md:mx-20  sm:py-5'>
                <Slider {...settings}>
                    <TestimonialCard description="I’m in corduroy heaven!!!! … Beautiful clothing made with care x This seasons colours are just beautiful. A speedy service and good price... " name="Saurabh Gunjal" />
                    <TestimonialCard description="Lovely material, very comfortable. Easy addition to your basics wardrobe." name="Rohit Singh" />
                    <TestimonialCard description="Have been impressed by the workwears I thought I'd go heavier for the colder months. Good.... " name="Rohan Shah" />
                    <TestimonialCard description="Quality products with reasonalbe price..." name="Abhishek Upadhaya" />
                    <TestimonialCard description="Beautifully made. Wonderful Hoodies. Great price and also satisfied with the delivery." name="Kunal123" />
                    <TestimonialCard description="Brilliant top at a great price. Tremendous quality and rapid delivery." name="Pratik Jaiswal" />
                    <TestimonialCard description="Great shade of pink and comfortablt to wear." name="Harshal" />
                    <TestimonialCard description="I love the beautiful colour and design of the over shirt. It is so versatile, it will get worn constantly - already looking at more..." name="Shubham" />


                </Slider>
            </div>
        </div>
    )
}

export default Testimonial
