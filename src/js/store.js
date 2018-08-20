import { applyMiddleware, createStore,compose, } from "redux"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import combineReducers from "./reducers"

//configure reducer items to be persisted
const persistConfig = {
  key: 'root',
  storage,
}

//make a persistREducer that will have persist config and combine reducer
const persistedReducer = persistReducer(persistConfig,combineReducers)

//create store passing persisted Reducer from above step as 1st argument follwed by devtool extension 
//and thunk and logger middleware
// export store and persistor that will be imported in index.js file
  export const store = createStore(persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),compose(applyMiddleware(thunk,logger))
);
  export const persistor = persistStore(store)

  


/*export default createStore(persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/
//export default createStore(combineReducers,middleware)



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