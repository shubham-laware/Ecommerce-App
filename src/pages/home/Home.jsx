import React,{useContext} from 'react'
import Layout from '../../components/layout/Layout'
import HomeImage from '../../components/homeImage/HomeImage';
import ShirtCards from '../../components/productcards/ShirtCards';
import Service from '../../components/serviceoffer/Service';
import PlainTshirtsCard from '../../components/productcards/PlainTshirtsCard';
import SweatShirtCards from '../../components/productcards/SweatShirtCards';
import { Navigate } from 'react-router-dom';
import Testimonial from '../../components/testimonials/Testimonial';




function Home() {
  
  const user =localStorage.getItem('user');

 return user ?(<Layout>
  <HomeImage/>
  <ShirtCards/>
  <PlainTshirtsCard/>
  <SweatShirtCards/>
  <Service/>
  <Testimonial/>
</Layout>) : <Navigate to={'/login'}/>
    
  
}

export default Home
