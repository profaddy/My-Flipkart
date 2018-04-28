import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import InputForm from './Inputform';
import TodoApp from './Todoapp';

export default class Router extends React.Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout} />
        <Route path='/header' component={Header} />
      </Router>
    );
  }
}