import { combineReducers } from "redux"

import items from "./tweetsReducer"
import user from "./userReducer"

export default combineReducers({
  items,
  user
})
