import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link , Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
//import store from "./js/store"
//mport store1 from './js/store1'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor,store } from './js/store'
import Home from "./js/Components/Home/home"
import Products from "./js/Components/Products/products"
import UserSignup from "./js/Components/Login&Signup/Signup/user_signup"
import UserLogin from "./js/Components/Login&Signup/User_login/user_login"
import Cart from "./js/Components/Products/Cart/cart"
import LoadingView from './js/Components/LoadingView/LoadingView'




ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={<LoadingView />} persistor={persistor}> 
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route  path="/signup" component={UserSignup} />
        <Route  path="/userlogin" component={UserLogin} />
        <Route  path="/products/:userid" component={Products} />
        <Route  path="/cart" component={Cart} />
        
        </Switch>
      </Router>
      </PersistGate>
  </Provider>,
 document.getElementById('root')

	);