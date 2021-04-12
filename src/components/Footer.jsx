import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-details">
        <div>
          <img src="/images/delivery.png" alt="" />
          <p>Fast Delivery</p>
        </div>
        <div>
          {' '}
          <img src="/images/protection.png" alt="" />
          <p>Buyer Protection</p>
        </div>
        <div>
          <img src="/images/support.png" alt="" />
          <p>Customer Support</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
