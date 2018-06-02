import { combineReducers } from "redux"

import items from "./tweetsReducer"
import user from "./userReducer"
import handlemodal from "../reducers/modalreducer"

export default combineReducers({
  items,
  user,
  handlemodal
})
