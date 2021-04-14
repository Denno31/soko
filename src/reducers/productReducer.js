import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SEARCH_CATEGORY_SUCCESS,
  PRODUCT_LIST_SEARCH_SUCCESS,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants'

export const productListReducer = (
  state = { loading: true, products: [] },
  action,
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true }
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_LIST_SEARCH_SUCCESS:
      let productPattern = new RegExp('^' + action.payload.searchName)
      let found = action.payload.data.filter((product) =>
        product.productName.match(productPattern),
      )
      if (found) {
        return { loading: false, products: found }
      }
      return {
        ...state,
        loading: false,
      }
    case PRODUCT_LIST_SEARCH_CATEGORY_SUCCESS:
      let items = action.payload.data.filter(
        (product) => product.category === action.payload.searchName,
      )

      if (items) {
        return { loading: false, products: items }
      }
      return {
        ...state,
        loading: false,
      }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const productDetailsReducer = (
  state = { product: {}, loading: true },
  action,
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const categoryListReducer = (
  state = { loading: true, categories: [] },
  action,
) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true }
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload }
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
