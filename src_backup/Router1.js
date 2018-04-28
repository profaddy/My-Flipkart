import React, { Component } from 'react';
import logo from './logo.svg';
import { Router, Route, Link, IndexRoute} from 'react-router'
import {hashHistory} from 'react-history'
import './App.css';
import Header from './header';
import Layout from './Layout';


export default class Router1 extends React.Component {

  render() {
    return (
     <Router >
        <Route path='/' component={Layout} />
        <Route path='/header' component={Header} />
      </Router>
    );
  }
}