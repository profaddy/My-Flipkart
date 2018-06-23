import { combineReducers } from "redux"

import items from "./tweetsReducer"
import user from "./userReducer"
import handlemodal from "../reducers/modalreducer"
import products from "../reducers/productsReducer"

export default combineReducers({
  items,
  user,
  handlemodal,
  products
})
