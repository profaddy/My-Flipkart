import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect, } from "react-redux"
import {bindActionCreators} from "redux"
import {form,FormGroup,FormControl,ControlLabel,Button,HelpBlock,LoaderButton,Modal} from 'react-bootstrap'
import {setUserName,setUserPwd,setUserdetails} from "../../../actions/useractions";
import UserLogin from '../User_login/user_login';
import '../User_login/user_login.css';
import axios from 'axios';
import {Toggle_login,Toggle_login_off,Toggle_signup,Toggle_signup_off,USER_LOGIN,USER_SIGNUP} from "../../../actions/modalactions"

axios.defaults.headers.post['Content-Type'] = 'application/json';

class UserSignup extends React.Component {

		constructor(){
		super();
		this.state={

			value:'',
		};

		this.handleonSubmit.bind(this);
		this.getValidationState.bind(this);
		//this.handleSignup.bind(this);
}

getValidationState(){

	const length=this.state.value.length
	if (length > 10) return'success';
		else if (length > 5) return'warning';
		return null;

}

handleonSubmit(e){
	e.preventDefault();	
//this.props.route_history.push('/products')
  var user_name= this._user_name.value
  var user_email= this._user_email.value
	var user_pwd = this._user_pwd.value
	var user_typ  = this._user_typ.value
	const user={
		name:user_name,
		email: user_email,
		password:user_pwd,
		user:user_typ,
	}
	console.log('test api call',{user});


		//this.props.dispatch(USER_LOGIN(user))
		this.props.USER_SIGNUP(user)
	 	console.log('test USER SIGNUP ADNAN ')
		this._user_name.value = ''
		this._user_email.value = ''
		this._user_pwd.value = ''
		this._user_typ.value = ''

}


render() {
		
	var errormsg = this.props.show_handlemodal.fetching_error
	var isError = this.props.show_handlemodal.isError
	var response_msg= this.props.show_handlemodal.data.message
	var response_success= this.props.show_handlemodal.data.success
	console.log('login history',this.props.route_history)

	console.log(errormsg)
	console.log(isError)
	console.log('response status',response_success)
	console.log('response message',response_msg)

	       	return (
						 
						<div class='login_wrapper'>

							<div class='row login_row'>

								<div class='col-sm-6 Login_sidebar'>

									<h3>Signup</h3>
									<p>We donot share your personal details with anyone</p>

								</div>
								
								<div class='col-sm-6 Login_form'>

									<form onSubmit = {this.handleonSubmit.bind(this)} >
									<FormGroup controlId="formBasicText" validationState={this.getValidationState()}> 
											<FormControl
													type="text" 
													placeholder="Enter Username"
													inputRef={(a) => this._user_name = a}
													/>
											<FormControl.Feedback />
									</FormGroup>

									<FormGroup> 
										<FormControl
												type="email" 
												placeholder="Enter Email"
												inputRef={(a) => this._user_email = a}
												/>
									</FormGroup>
									
									<FormGroup> 
										<FormControl
												type="password" 
												placeholder="Enter Password"
												inputRef={(a) => this._user_pwd = a}
												/>
									</FormGroup> 

									<FormGroup> 
										<FormControl
												type="text" 
												placeholder="Enter User Type"
												inputRef={(a) => this._user_typ = a}
												/>
									</FormGroup> 
									
									<button type='submit' class='Login_button'>Signup</button>
									
									{isError && 
									<p>`We are facing some {errormsg} please report to adnansaify11@gmail.com`</p>
									}
									{!response_success &&
										<p>{response_msg}</p>
									}
									</form>
									<form >
									<button onClick={this.props.handleShowLogin}>
										Existing User? Login
									</button>
									</form>
								
							</div>
							</div>

					</div>
					
	      		 );			

	}
}

const mapStateToProps = state =>  ({

	show_handlemodal:state.handlemodal
	
});

const mapDispatchToProps = (dispatch) => {
  /* code change */
  return bindActionCreators({
    USER_SIGNUP: USER_SIGNUP
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(UserSignup);


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