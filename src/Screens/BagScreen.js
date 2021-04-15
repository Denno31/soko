import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartActions'

function BagScreen() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  const cart = useSelector((state) => state.cart)
  cart.itemsPrice = cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  cart.delivery = 100
  cart.total = cart.delivery + cart.itemsPrice
  const adjustAddQty = (productId, qty) => {
    qty += 1
    console.log(productId, qty)
    dispatch(addToCart(productId, qty))
  }
  return (
    <div style={{ borderTop: '2px solid #eeeeee' }}>
      {cartItems.length <= 0 && (
        <div className="empty-cart">
          <img src="/images/cartempty.jpg" alt="" />
          <h2>It's empty here</h2>
          <p>Start shopping to add items to your bag</p>
          <Link to="/">
            <div className="home-div">Back to homepage</div>
          </Link>
        </div>
      )}
      <div
        className="bag-c-items"
        style={{ width: '40%', margin: '25px auto' }}
      >
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="bag-items"
            style={{
              marginBottom: '1rem',
              borderBottom: '1px solid #f0f0f0',
              paddingBottom: '1rem',
            }}
          >
            <div className="right">
              <img
                src={item.image}
                alt=""
                style={{ width: '3.5rem', borderRadius: '5px' }}
              />
              <div style={{ marginLeft: '1rem' }}>
                <h3 style={{ marginBottom: '0px' }}>{item.name}</h3>
                <p style={{ marginTop: '0px' }}>ugx {item.price}</p>
              </div>
            </div>
            <div>
              <div className="button-container">
                <div className="minus-button">
                  <img
                    src="/images/minus.png"
                    alt=""
                    onClick={() => {
                      if (item.qty <= 1) return

                      item.qty -= 1
                      return dispatch(addToCart(item.product, item.qty))
                    }}
                  />
                </div>
                <div className="button-text">{item.qty}</div>
                <div className="add-button">
                  <img
                    src="/images/plus.png"
                    alt=""
                    onClick={() => {
                      return adjustAddQty(item.product, item.qty)
                    }}
                  />
                </div>
                <button
                  style={{
                    marginLeft: '10px',
                    backgroundColor: '#fff',
                    border: '1px solid #2766CC',
                    borderRadius: '10px',
                    color: '#2766CC',
                  }}
                  onClick={() => {
                    dispatch(removeFromCart(item.product))
                  }}
                >
                  remove
                </button>
              </div>
            </div>
          </div>
        ))}
        {cartItems.length > 0 && (
          <>
            <div className="row">
              <ul>
                <li>Item total</li>
                <li>Delivery</li>
                <li>Total</li>
              </ul>
              <ul>
                <li>UGX {cart.itemsPrice}</li>
                <li>UGX {cart.delivery}</li>
                <li>UGX {cart.total}</li>
              </ul>
            </div>
            <div className="home-div">proceed to checkout</div>
          </>
        )}
      </div>
    </div>
  )
}

export default BagScreen
