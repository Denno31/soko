import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'

function Nav(props) {
  const history = useHistory()
  console.log('nav', props)
  const { cartItems } = useSelector((state) => state.cart)
  useEffect(() => {}, [history])
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-right flex">
          <div className="logo-nav">
            <div className="logo">
              <Link to="/">
                <img src="/images/supermarket.png" alt="" />
              </Link>
            </div>
            <div className="nav-details">
              <div className="navbar-brand">
                <strong>Target</strong>
              </div>
              <div className="text-light">
                cham Towers, plot 12 Nkuruma Rd, Kampala
              </div>
            </div>
          </div>
          <div className="list">
            <ul className="nav-menu">
              <li>
                <Link to="/bag">
                  <div className="the-bag">
                    <img
                      src="/images/bag.png"
                      alt=""
                      style={{ marginRight: '0', paddingRight: '0' }}
                    />
                    <div className="bag-badge">{cartItems.length}</div>
                  </div>{' '}
                  <span>Bag</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <img src="/images/user.png" alt="" />
                  <span>Account</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="search-container">
          <div className="search">
            {' '}
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for products..."
            />
            <button className="search-icon">
              <SearchIcon className="search-icon-btn" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
