import React,{Component} from 'react'
import { connect } from "react-redux"
import Navbar1 from './navbar'
import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {Link } from 'react-router-dom'

import UserSignup from './usersignup'
import UserLogin from './user_login'
import Header from './header'
import Footer from './footer'
export default class Layout extends React.Component {


	render() {

		return(
				<div>
				<Header />
				<UserSignup />
				<UserLogin />
				<Footer />
				</div>

			);

	}




}