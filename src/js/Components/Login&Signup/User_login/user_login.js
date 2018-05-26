import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"
import {form,FormGroup,FormControl,ControlLabel,HelpBlock,LoaderButton} from 'react-bootstrap'
import {setUserName,setUserPwd,setUserdetails} from "../../../actions/useractions"
import './user_login.css'

class UserLogin extends React.Component {

		constructor(){
super();
this.state={

	value:''
};

this.handleonSubmit.bind(this);
this.getValidationState.bind(this);

}

getValidationState(){

	const length=this.state.value.length
	if (length > 10) return'success';
		else if (length > 5) return'warning';
		return null;

}

handleonSubmit(){
	
	var user_name = this._user_name.value
	var user_pwd  = this._user_pwd.value
	console.log('test_username',user_name)
	console.log('test_userpwd',user_pwd)
	if (user_name === this.props.user_details.name){
		return'success'
	}
	else{return 'failure'}
	//this.props.dispatch(setUserdetails(user_name,user_pwd))


	this._user_name.value = ''
	this._user_pwd.value = ''
	

	
}

render() {
			console.log(this.props.user_details)
	       
	       console.log('render console',this.props.user_add_flag)
	       console.log('render console',this.props)
				var user_name_display = this.props.name
				console.log(user_name_display)
				var user_flag = this.props.user_add_flag
				console.log(user_flag)

	       	    return (
						<div class='login_wrapper'>
							<div class='row login_row'>
								<div class='col-sm-6 Login_sidebar'>
									<h3>Login</h3>
									<p>Get access to your orders, Wishlist and Recommendations</p>
								</div>
								<div class='col-sm-6'>
				    	<form onSubmit={this.handleonSubmit.bind(this)}>
							<h2>User Login </h2>
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
	        					type="password" 
	       				 		placeholder="Enter Password"
	        					inputRef={(a) => this._user_pwd = a}
	      						/>
							</FormGroup> 
							
							<button type='submit' class ='btn-danger' onClick = {this.handleonSubmit.bind(this)} > Login</button>
						</form>
							</div>
							</div>
						
						
					</div>
					
	      		 );			

	}
}

const mapStateToProps = state =>  ({
	
    user_details:  state.user.user,
    user_add_flag: state.user.user.user_add_successfull
    
	
});



export default connect(mapStateToProps)(UserLogin);
