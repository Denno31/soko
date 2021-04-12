import React from 'react'
import Category from '../components/Category'
import ProductList from '../components/ProductList'
import Bag from '../components/Bag'

function HomeScreen(props) {
  console.log(props)
  return (
    <div class="home-container container">
      <Category />
      <ProductList />
      <Bag />
    </div>
  )
}

export default HomeScreen
