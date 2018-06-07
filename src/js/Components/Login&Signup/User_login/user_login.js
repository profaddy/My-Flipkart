import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"
import {form,FormGroup,FormControl,ControlLabel,Button,HelpBlock,LoaderButton,Modal} from 'react-bootstrap'
import {setUserName,setUserPwd,setUserdetails} from "../../../actions/useractions";
import UserSignup from '../Signup/user_signup';
import './user_login.css';
import axios from 'axios';
import {Toggle_login,Toggle_login_off,Toggle_signup,Toggle_signup_off,USER_LOGIN} from "../../../actions/modalactions"

axios.defaults.headers.post['Content-Type'] = 'application/json';

class UserLogin extends React.Component {

		constructor(){
		super();
		this.state={

			value:'',
			
			
		};

		this.handleonSubmit.bind(this);
		this.getValidationState.bind(this);
		//this.handleSignup.bind(this);
}

/*handleSignup(e){

	e.preventDefault();
	this.props.dispatch(Toggle_signup());																																												());

}*/

getValidationState(){

	const length=this.state.value.length
	if (length > 10) return'success';
		else if (length > 5) return'warning';
		return null;

}

async handleonSubmit(e){
	e.preventDefault();
	console.log('addy')
	
	var user_name = this._user_name.value
	var user_pwd  = this._user_pwd.value
	const user={
		email: user_name,
		password:user_pwd
	}
	console.log('test api call',{user});

	await this.props.dispatch(USER_LOGIN(user))
	/*fetch('http://localhost:9000/auth/login', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: user_name,
    password:user_pwd
  })
})*/

/*axios.post('http://localhost:9000/auth/login', {
	user,

})
.then(function (response) {
	
	console.log(response);
})
.catch(function (error) {

	console.log(error);
});*/

	/*axios.post('http://localhost:9000/auth/login',{ user })
	.then( res => {
		console.log('hi addy i am here')
		console.log('test',res.data);
	})*/

	//this.props.dispatch(setUserdetails(user_name,user_pwd))

	this._user_name.value = ''
	this._user_pwd.value = ''

}

render() {
		
	var errormsg = this.props.show_handlemodal.fetching_error
	var isError = this.props.show_handlemodal.fetching_user
	console.log(errormsg)
	console.log(isError)

	       	return (
						 
						<div class='login_wrapper'>

							<div class='row login_row'>

								<div class='col-sm-6 Login_sidebar'>

									<h3>Login</h3>
									<p>Get access to your orders, Wishlist and Recommendations</p>
								</div>
								<div class='col-sm-6 Login_form'>

									<form>
									<FormGroup controlId="formBasicText" validationState={this.getValidationState()}> 
								
											<FormControl
													type="email" 
													placeholder="Enter Username"
													inputRef={(a) => this._user_name = a}
													/>
											<FormControl.Feedback />
								
									</FormGroup>
									<FormGroup> 
										<FormControl
												type="pasword" 
												placeholder="Enter Password"
												inputRef={(a) => this._user_pwd = a}
												/>
									</FormGroup> 
									
									<button type='submit' class='Login_button' onClick = {this.handleonSubmit.bind(this)} > Login</button>
									<button onClick={this.props.handleShowSignup}>
										New to Flipkart? Signup
									</button>
									{isError && 
									alert (`WE are facing some ${errormsg} please report to adnansaify11@gmail.com`)
									}
									</form>
								
							</div>
							</div>

					</div>
					
	      		 );			

	}
}

const mapStateToProps = state =>  ({
	
  show_handlemodal:state.handlemodal,
    
	
});



export default connect(mapStateToProps)(UserLogin);
