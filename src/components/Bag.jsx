import React, { useState } from 'react'
import { useSelector } from 'react-redux'
function Bag() {
  const { cartItems } = useSelector((state) => state.cart)
  // const [quantity, setQuantity] = useState(cartItems.qty)
  return (
    <div className="p-1 cart">
      <div className="bag-header">
        <h2>
          Bag<span className="badge">{cartItems.length}</span>
        </h2>
      </div>
      <div className="bag">
        {cartItems.length <= 0 && (
          <div>
            <img src="/images/cartempty.jpg" alt="" />
            <div className="descrip">
              <p>
                <strong className="f-1">It's empty here</strong>
              </p>
              <p>Start shopping to add items to your bag</p>
            </div>
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="bag-container">
            {cartItems.map((item) => (
              <div className="products m-1">
                <div className="right p-1">
                  <div className="product-image">
                    <img src="/images/shoe.jpg" alt="" />

                    <div className="discount-badge"></div>
                  </div>
                  <div className="product-details p-1">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                </div>
                <div className="add-cart-btn">
                  <div className="button-container">
                    <div className="minus-button">
                      <img src="/images/minus.png" alt="" />
                    </div>
                    <div className="button-text">1</div>
                    <div className="add-button">
                      <img src="/images/plus.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Bag
