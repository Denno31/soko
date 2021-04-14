import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listProducts } from '../actions/productActions'

function ProductList() {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.products)
  const calculatedPrice = (discount, price) => {
    if (!discount) return price
    let result = ((100 - discount) * price) / 100
    return result
  }
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return loading ? (
    <div className="py-1 p-1">Loading</div>
  ) : error ? (
    <div className="py-1 p-1">{error}</div>
  ) : (
    <div className="product">
      <div>
        <div className="py-1 p-1 product-header">
          {products && (
            <h2>
              All Categories<span className="badge">{products.length}</span>
            </h2>
          )}
        </div>
      </div>
      {products.map((product) => (
        <Link to={`product/${product.id}`} key={product.id}>
          <div className="products m-1">
            <div className="right p-1">
              <div className="product-image">
                <img src="/images/shoe.jpg" alt="" />
                {product.discount && (
                  <div className="discount-badge">{`-${product.discount}%`}</div>
                )}
              </div>
              <div className="product-details p-1">
                <h3>{product.productName}</h3>
                <p>ugx {calculatedPrice(product.discount, product.price)}</p>
                {product.discount && (
                  <p className="disc">ugx {product.price}</p>
                )}
              </div>
            </div>
            <div className="add-cart-btn">
              <button className="btn-primary">+ Add</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductList
