import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Box from '@material-ui/core/Box'
import SlickSlider from '../components/SlickSlider'
import RelatedItemsSlider from '../components/RelatedItemsSlider'
import { detailsProduct } from '../actions/productActions'
import { addToCart } from '../actions/cartActions'
function ProductDetails(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const { product, error, loading } = useSelector((state) => state.product)
  const productId = props.match.params.id
  const calculatedPrice = (discount, price) => {
    if (!discount) return price
    let result = ((100 - discount) * price) / 100
    return result
  }
  useEffect(() => {
    dispatch(detailsProduct(productId))
  }, [dispatch, productId])
  const addToCartHandler = (productId, qty) => {
    dispatch(addToCart(productId, qty))
  }
  return (
    <div className="product-detail-wrapper">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="product-cat  m-1">
            <h2
              className="product-container container"
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
              }}
            >
              <Link to="/">
                <ArrowBackIosIcon />
                <span style={{ marginLeft: '2rem' }}>{product.category}</span>
              </Link>
            </h2>
          </div>
          <div className="container">
            <Grid container direction="row" spacing={3}>
              <Grid container item xs={12} sm={5} spacing={0}>
                <SlickSlider settings={settings} images={product.image} />
              </Grid>
              <Grid item xs={12} sm={7}>
                <div className="product-desc">
                  <h3>{product.productName}</h3>
                  <p>{product.decription}</p>
                  <Box display="flex" justifyContent="flex-start">
                    <Box>
                      <h2>
                        UGX {calculatedPrice(product.discount, product.price)}
                      </h2>
                    </Box>
                    {product.discount && (
                      <Box>
                        <div
                          className="p-badge"
                          style={{ marginTop: '1.5rem', marginLeft: '2rem' }}
                        >
                          -{product.discount}%
                        </div>
                      </Box>
                    )}
                  </Box>
                  {product.discount && (
                    <p className="p-discount">ugx {product.price}</p>
                  )}
                  <div className="button-container">
                    <div className="minus-button">
                      <img
                        src="/images/minus.png"
                        alt=""
                        onClick={() => {
                          if (quantity <= 1) return
                          return setQuantity(quantity - 1)
                        }}
                      />
                    </div>
                    <div className="button-text">{quantity}</div>
                    <div className="add-button">
                      <img
                        src="/images/plus.png"
                        alt=""
                        onClick={() => setQuantity(quantity + 1)}
                      />
                    </div>
                  </div>
                  <div className="pc-button-container">
                    <div
                      className="pc-button-add"
                      onClick={() => {
                        return addToCartHandler(product.id, quantity)
                      }}
                    >
                      <span>Add to Bag</span>
                    </div>
                    <a className="pc-button-buy" href="/classicshop/bag">
                      <span>Buy Now</span>
                    </a>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className="related-img py-3">
              <h2>RELATED PRODUCTS</h2>
              <RelatedItemsSlider settings={settings} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductDetails
