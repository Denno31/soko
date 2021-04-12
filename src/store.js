import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  productListReducer,
  categoryListReducer,
  productDetailsReducer,
} from './reducers/productReducer'

const initialState = {}

const reducer = combineReducers({
  products: productListReducer,
  categories: categoryListReducer,
  product: productDetailsReducer,
})

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
)

export default store
