import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link , Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./js/store"

import Layout from "./js/components/layout"
import UserSignup from "./js/components/usersignup"
import  TodoApp  from './js/components/todoapp'




ReactDOM.render(
  <Provider store={store}>
    <Router>
    	<switch>
      <Route exact path="/" component={Layout} />
      <Route  path="/signup" component={UserSignup} />
      <Route  path="/todoapp" component={TodoApp} />
      </switch>
    </Router>
  </Provider>,
 document.getElementById('root')

	);