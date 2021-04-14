import Axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'
import { endpoint } from '../constants/endpoint'
export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`${endpoint}/products/${productId}`)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.productName,
      image: data.image[0],
      price: data.price,

      product: data.id,
      qty,
    },
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
