import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import { searchProduct } from '../actions/productActions'

function Nav(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  const [searchTerm, setSearchTerm] = useState('')
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

        <div className="search-container" id="search-div">
          <div className="search">
            {' '}
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="search-icon"
              onClick={() => dispatch(searchProduct(searchTerm))}
            >
              <SearchIcon className="search-icon-btn" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
