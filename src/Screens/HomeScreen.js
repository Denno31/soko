import React, { useState } from 'react'
import Category from '../components/Category'
import ProductList from '../components/ProductList'
import Bag from '../components/Bag'

function HomeScreen(props) {
  const [cat, setCat] = useState('All Categories')
  const handleSetCategory = (cat) => {
    setCat(cat)
  }
  return (
    <div style={{ borderTop: '2px solid #eeeeee' }}>
      <div
        className="home-container container"
        style={{ boxSizing: 'border-box' }}
      >
        <Category onHandleSetCategory={handleSetCategory} />
        <ProductList cat={cat} />
        <Bag />
      </div>
    </div>
  )
}

export default HomeScreen
