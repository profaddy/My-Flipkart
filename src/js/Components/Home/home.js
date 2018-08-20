import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { history } from 'react-router';
import { Button, Modal } from "react-bootstrap";
import UserSignup from "../Login&Signup/Signup/user_signup";
import UserLogin from "../Login&Signup/User_login/user_login";
import Header from "../Common/Header/header";
import Footer from "../Common/Footer/footer";  
import Products from "../Products/products"
import ProductListings from "../Products/ProductsListing"
import Cart from "../Products/Cart/cart"
import data from "../../../data/products.json"
import "./home.css"

export default class Home extends React.Component {
  render() {
		console.log('history',this.props.history)
    return (
      <div className='container-fluid no-gutters'>
        <div className='row'>

          <div className='colsm-12'>     
            <Header route_history={this.props.history} />  
          </div>
         
          <div className='col-sm-12'>
            <Products products={data.products}/>
          </div>

        </div>
      </div>
    );
  }
}
