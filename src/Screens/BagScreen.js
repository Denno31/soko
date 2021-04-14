import React from 'react'
import { useSelector } from 'react-redux'

function BagScreen() {
  const { cartItems } = useSelector((state) => state.cart)
  const cart = useSelector((state) => state.cart)
  cart.itemsPrice = cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  cart.delivery = 100
  cart.total = cart.delivery + cart.itemsPrice
  return (
    <div style={{ borderTop: '2px solid #eeeeee' }}>
      <div style={{ width: '40%', margin: '25px auto' }}>
        {cartItems.map((item) => (
          <div
            key={item.id}
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
                  <img src="/images/minus.png" alt="" />
                </div>
                <div className="button-text">{item.qty}</div>
                <div className="add-button">
                  <img src="/images/plus.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
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
      </div>
    </div>
  )
}

export default BagScreen
