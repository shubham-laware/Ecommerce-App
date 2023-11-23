import React from 'react'
import Layout from '../../components/layout/Layout'
import FilterComponents from '../../components/filtercomponents/FilterComponents'
import AllProductsPage from './allproductsPage/AllProductsPage'

function AllProducts() {
  return (
    <Layout>
        <FilterComponents/>
        <AllProductsPage/>
    </Layout>
  )
}

export default AllProducts
