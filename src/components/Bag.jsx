import React from 'react'
import { useSelector } from 'react-redux'
function Bag() {
  const { cartItems } = useSelector((state) => state.cart)
  const cart = useSelector((state) => state.cart)
  cart.itemsPrice = cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  cart.delivery = 100
  cart.total = cart.delivery + cart.itemsPrice
  return (
    <div className="cart m-x" style={{ boxSizing: 'border-box' }}>
      <div className="bag-header">
        <h2>
          Bag<span className="badge">{cartItems.length}</span>
        </h2>
      </div>
      {cartItems.length <= 0 && (
        <div className="bag" style={{ boxSizing: 'border-box' }}>
          <div>
            <img src="/images/cartempty.jpg" alt="" />
            <div className="descrip">
              <p>
                <strong className="f-1">It's empty here</strong>
              </p>
              <p>Start shopping to add items to your bag</p>
            </div>
          </div>
        </div>
      )}
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
  )
}

export default Bag
