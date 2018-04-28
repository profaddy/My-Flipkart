import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Layout from './Layout';
import Header from './header';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<Router >
        <Route path='/' component={Layout} />
     </Router>
	, document.getElementById('root')

	);
registerServiceWorker();
