import React,{Component} from 'react'
import { connect } from "react-redux"
import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {Link } from 'react-router-dom'

import UserSignup from '../Login&Signup/Signup/user_signup'
import UserLogin from '../Login&Signup/User_login/user_login'
import Header from '../Common/Header/header'
import Footer from '../Common/Footer/footer'


export default class Home extends React.Component {


	render() {

		return(
				<div>
				<Header />
			<div>This is home page</div>
				<Footer />
				</div>

			);

	}




}