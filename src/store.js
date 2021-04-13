import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer'
import {
  productListReducer,
  categoryListReducer,
  productDetailsReducer,
} from './reducers/productReducer'

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
}

const reducer = combineReducers({
  products: productListReducer,
  categories: categoryListReducer,
  product: productDetailsReducer,
  cart: cartReducer,
})

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
)

export default store
