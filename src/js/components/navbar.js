import React,{Component } from 'react'
import {Link } from 'react-router-dom'
import {Navbar,Nav,NavItem} from 'react-bootstrap'

export default class Navbar1 extends React.Component{
	
render(){
	
return(

	<Navbar default collapseOnSelect>
		<Navbar.header>
			<Navbar.brand> 
				<Link to="/">code life </Link>
			</Navbar.brand>
		<Navbar.Toggle />
		</Navbar.header>
		<Navbar.Collapse>
			<Nav pullRight>
				<NavItem eventKey={1} componentClass={Link} to="/">
				Layout
				</NavItem>
				<NavItem eventKey={2} componentClass={Link} to="/todoapp">
				todoapp
				</NavItem>
				<NavItem eventKey={3} componentClass={Link} to="/usersignup">
				usersignup
				</NavItem>
			</Nav>
		</Navbar.Collapse>


	</Navbar>
);

}

}