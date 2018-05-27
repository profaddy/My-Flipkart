import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Button,Modal,closeButton} from 'react-bootstrap';
import UserLogin from '../../Login&Signup/User_login/user_login'
import './header.css'

export default class Header extends React.Component {

		constructor(props){
      
    super(props);
    
    this.state={
        show_login: false
    };
    this.handleShow=this.handleShow.bind(this);;
    this.handleClose=this.handleClose.bind(this)
  }

  handleShow(){
    console.log('state before being set',this.state.show)

    this.setState({ show_login:true });
    console.log('state after being set',this.state.show)
  }

  handleClose(){

    this.setState({ show_login: false });
  }

  render() {
    console.log('state after render',this.state.show);
       
    return (

    	<div>
        <div class='header_wrapper'>
          <div class='row'>
            <div class='col-sm-2'> 
              <Link class='list-unstyled'to='/home'>
                <h6 class='logo'>Flipkart</h6>
                <img class='logo_img'src='https://lh3.googleusercontent.com/FA_rzaEeLlumm0qh68q3z5Pt-PGMVPf2Z28_pbega7SaXSiKjSzh-0MZceB3FpdvQIBq'/>
              </Link>      
            </div>
            <div class='col-sm-6'>
              searchbar
            </div>
            <div class='col-sm-2'>
              <button className='header-button' onClick={this.handleShow}>
              Login/Signup
              </button>
            </div>
          </div>
        </div>
      
        <Modal show={this.state.show_login} onHide={this.handleClose}>
          <Modal.Header closeButton>
            
          </Modal.Header>
          <Modal.Body >
            <div>
             <UserLogin />
            </div>
            
          </Modal.Body>
        </Modal>
      
      </div>
     );
  }
}

