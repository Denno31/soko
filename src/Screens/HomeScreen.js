import React from 'react'
import Category from '../components/Category'
import ProductList from '../components/ProductList'
import Bag from '../components/Bag'

function HomeScreen(props) {
  return (
    <div style={{ borderTop: '2px solid #eeeeee' }}>
      <div class="home-container container" style={{ boxSizing: 'border-box' }}>
        <Category />
        <ProductList />
        <Bag />
      </div>
    </div>
  )
}

export default HomeScreen
