import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Button,Modal,closeButton} from 'react-bootstrap';
import UserLogin from '../../Login&Signup/User_login/user_login';
import UserSignup from '../../Login&Signup/Signup/user_signup';
import { connect } from "react-redux";
import {Toggle_login,Toggle_login_off,Toggle_signup,Toggle_signup_off} from "../../../actions/modalactions"

import './header.css'

 class Header extends React.Component {

		constructor(props){
      
    super(props);
    
    this.state={
        
    };
    this.handleShow=this.handleShow.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.handleShowSignup=this.handleShowSignup.bind(this);
		this.handleCloseSignup=this.handleCloseSignup.bind(this);
   
  }

  handleShow(){
    

    this.props.dispatch(Toggle_login());
  
  }

  handleClose(){

    this.props.dispatch(Toggle_login_off());
  }

  handleShowSignup(e){
    e.preventDefault();
    this.props.dispatch(Toggle_signup());
  }
  
  handleCloseSignup(){
  
    this.props.dispatch(Toggle_signup_off());
  }
 

  render() {
    console.log('state after render',this.props.show_handlemodal);
    console.log('state after render',this.props.show_handlemodal);
    console.log(this.props)

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
            <form>
            
              <Button className='header-button' onClick={this.handleShow}>
              Login/Signup
              </Button>
            
              </form>
            </div>
          </div>
        </div>
      
        <Modal show={this.props.show_handlemodal.handlemodal.show_login} onHide={this.handleClose}>
        
          <Modal.Header closeButton>
            
          </Modal.Header>
          <Modal.Body >
            <div>
             <UserLogin handleShowSignup={this.handleShowSignup}/>
             
            </div>
            
          </Modal.Body>
        </Modal>

        <Modal show={this.props.show_handlemodal.handlemodal.show_signup} onHide={this.handleCloseSignup}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body >
          <div>
          <UserSignup handleShowSignup={this.handleShowSignup} />
          </div>
          
        </Modal.Body>
      </Modal>

      </div>
     );

  }
}

const mapStateToProps = state =>  ({
	
  show_handlemodal:state.handlemodal,
    
	
});



export default connect(mapStateToProps)(Header);