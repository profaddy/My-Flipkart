import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link , Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./js/store"

import Home from "./js/Components/Home/home"
import Products from "./js/Components/Products/products"
import UserSignup from "./js/Components/Login&Signup/Signup/user_signup"
import UserLogin from "./js/Components/Login&Signup/User_login/user_login"
import Cart from "./js/Components/Products/Cart/cart"




ReactDOM.render(
  <Provider store={store}>
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
  </Provider>,
 document.getElementById('root')

	);