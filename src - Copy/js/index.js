import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link , Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./store"

import Todoapp from "../components/todoapp"





ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Todoapp}/>
      
    </Router>
  </Provider>,
 document.getElementById('root')

	);