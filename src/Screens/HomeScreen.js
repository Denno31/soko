import React, { useState, useEffect } from 'react'
import Category from '../components/Category'
import ProductList from '../components/ProductList'
import Bag from '../components/Bag'

function HomeScreen(props) {
  const [cat, setCat] = useState('All Categories')

  useEffect(() => {
    const searchDiv = document.querySelector('#search-div')
    if (searchDiv) {
      searchDiv.style.display = 'block'
    }

    return function () {
      console.log('unmounting')
      if (searchDiv) searchDiv.style.display = 'none'
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
