import React from 'react'
import ServiceCard from './ServiceCard'

function Service() {
    return (
        <div className=' flex flex-col gap-4 mx-10 md:mx-20 mt-4 mb-10 sm:flex-row py-1'>
             
            

            <ServiceCard title={'Premium T-shirts'} desc={'Our T-shirts are 100% cotton'} img={'/shirt-outline-svgrepo-com.svg'}/>
            <ServiceCard title={'Shipping'} desc={'We ship all over India'} img={'/shipping-truck-svgrepo-com.svg'}/>
            <ServiceCard title={'Exciting Offers'} desc={'We provide amazing offers and discounts'} img={'/rupee-line-circle-svgrepo-com.svg'}/>
           

            

        </div>
    )
}

export default Service
