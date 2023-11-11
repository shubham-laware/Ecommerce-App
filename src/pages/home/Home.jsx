import React,{useContext} from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HomeImage from '../../components/homeImage/HomeImage';
import FilterComponents from '../../components/filtercomponents/FilterComponents';
import CardsContainer from '../../components/productcards/CardsContainer';
import Service from '../../components/serviceoffer/Service';

function Home() {

  return (
    <Layout>
        <HomeImage/>
       <FilterComponents/>
       <CardsContainer/>
       <Service/>
      
    </Layout>
  )
}

export default Home
