import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"
import {form,FormGroup,FormControl,ControlLabel,HelpBlock} from 'react-bootstrap'
import {setUserName,setUserPwd,setUserdetails} from "../actions/useractions"


class UserSignup extends React.Component {

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
	var user_email  = this._user_email.value
	console.log('test_username',user_name)
	console.log('test_username',user_pwd)
	console.log('test_username',user_email)
	this.props.dispatch(setUserdetails(user_name,user_pwd,user_email))


	this._user_name.value = ''
	this._user_pwd.value = ''
	this._user_email.value = ''

	
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
				    <div>
				    	<form>
							<h2>User Signup </h2>
							<FormGroup controlId="formBasicText" validationState={this.getValidationState()}> 
						
							    <FormControl
            					type="text" 
           				 		placeholder="Enter Username"
            					inputRef={(a) => this._user_name = a}
          						/>
          						<FormControl.Feedback />
  								
						
							</FormGroup>
							<FormGroup controlId="formBasicText"> 
								<FormControl
	        					type="password" 
	       				 		placeholder="Enter Password"
	        					inputRef={(a) => this._user_pwd = a}
	      						/>
							</FormGroup> 
							<FormGroup controlId="formBasicText"> 
								<FormControl
            					type="text" 
           				 		placeholder="Enter Email"
            					inputRef={(a) => this._user_email = a}
          						/>
							</FormGroup> 
							<button type='button' class ='btn-danger' onClick = {this.handleonSubmit.bind(this)}>Signup</button>
						</form>
							
						
						
					</div>
					
	      		 );			

	}
}

const mapStateToProps = state =>  ({
	
    user_details:  state.user.user,
    user_add_flag: state.user.user.user_add_successfull
    
	
});



export default connect(mapStateToProps)(UserSignup);
