import { combineReducers } from "redux"

import items from "./tweetsReducer"
import user from "./userReducer"
import handlemodal from "../reducers/modalreducer"
import products from "../reducers/productsReducer"
import cartReducer from "../reducers/CartReducer"

export default combineReducers({
  items,
  user,
  handlemodal,
  products,
  cart : cartReducer
})
