import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import HomeIcon from '@material-ui/icons/Home'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function SecondaryFooter() {
  const { cartItems } = useSelector((state) => state.cart)
  return (
    <div className="secondary-footer">
      <p>STORE DETAILS</p>
      <h2>Target</h2>
      <p>cham Towers, Plot 12 Nkuruma Rd, Kampala Ug</p>
      <div className="btn">
        <WhatsAppIcon />
        <span>Chat with us</span>
      </div>
      <div className="responsive-nav-wrapper">
        <div className="responsive-nav">
          <Link to="/">
            <div className="py-1">
              <HomeIcon />
              <p>Home</p>
            </div>
          </Link>
          <div className="py-1">
            <Link to="/bag">
              {cartItems.length > 0 ? (
                <>
                  {' '}
                  <img
                    src="/images/bag.png"
                    alt=""
                    style={{ marginRight: '0', paddingRight: '0' }}
                  />{' '}
                  <div className="bag-badge">{cartItems.length}</div>
                </>
              ) : (
                <img src="/images/bag.png" alt="" />
              )}
              <p>Bag</p>
            </Link>
          </div>
          <div className="py-1">
            <img src="/images/user.png" alt="" />
            <p>Account</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondaryFooter
