import { applyMiddleware, createStore } from "redux"
//import combineReducers from "./Reducers"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import combineReducers from "./reducers"
const persistConfig = {
  key: 'root',
  storage,
}




const middleware = applyMiddleware(thunk, logger)

export default createStore(combineReducers,middleware)
//export default createStore(middleware)



/*import { applyMiddleware, createStore , compose} from "redux"
import combineReducers from "./reducers"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from "./reducers"

 const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers)

const middleware = [thunk,logger]



export const store = createStore(persistedReducer,applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  export const persistor = persistStore(store)

export const  createStore(combineReducers,composedEnhancers);


/*const store = createStore(
  combineReducers, /* preloadedState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );*/