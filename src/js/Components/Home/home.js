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
import Heatchart from "../D3 Heatmap/d3heatmap";  
import Products from "../Products/products"
import ProductListings from "../Products/ProductsListing"
import data from "../../../data/products.json"
import "./home.css"

export default class Home extends React.Component {
  render() {
		console.log('history',this.props.history)
    return (
			<div>
        <Header route_history={this.props.history} />  
        <ProductListings products={data.products}/> 
        <div>This is home page</div>
      </div>
    );
  }
}
