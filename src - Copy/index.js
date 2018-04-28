import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link , Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./js/store"

import Todoapp from "./js/components/todoapp.js"





ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Todoapp}/>
      
    </Router>
  </Provider>,
 document.getElementById('root')

	);