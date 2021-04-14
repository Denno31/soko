import {
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_SEARCH_SUCCESS,
  PRODUCT_LIST_SEARCH_CATEGORY_SUCCESS,
} from '../constants/productConstants'
import { endpoint } from '../constants/endpoint'
import axios from 'axios'
export const listProducts = () => async (dispatch) => {
  //console.log(endpoint)
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  })
  try {
    const { data } = await axios.get(`${endpoint}/products`)
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
  }
}
export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId })
  try {
    const { data } = await axios.get(`${endpoint}/products/${productId}`)
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const categoryList = () => async (dispatch) => {
  dispatch({ type: CATEGORY_LIST_REQUEST })
  try {
    const { data } = await axios.get(`${endpoint}/categories`)
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const searchProduct = (searchName) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  })
  try {
    const { data } = await axios.get(`${endpoint}/products`)
    dispatch({
      type: PRODUCT_LIST_SEARCH_SUCCESS,
      payload: { data, searchName },
    })
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
  }
}

export const searchProductCategory = (searchName) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  })
  try {
    const { data } = await axios.get(`${endpoint}/products`)
    dispatch({
      type: PRODUCT_LIST_SEARCH_CATEGORY_SUCCESS,
      payload: { data, searchName },
    })
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
  }
}
