import React, { Component } from 'react';


export default class User_login extends React.Component {

	constructor(){

		super();
		this.state = {

			reply:false,
			username:'adnan',
			userpwd:'saify',
			error_message:''
		}
		

		
	}

handleOnreply(){

this.props.finputreplysubmit(this._inputreply.value)
 this.setState({
     					reply :true
			});

}

	handleOnsubmit(){
		
		
		
	   	//this.props.finputcommentsubmit(this._user_name.value,this._user_pwd.value)
		
			var username = this.state.username 
			var userpwd = this.state.userpwd
			

		if (username === this._user_name.value) 
		{
		console.log(this._user_name.name);
		console.log(this._user_name.value);
				if(userpwd === this._user_pwd.value)
				{
						this.setState({

							error_message : 'user successfully logged IN'
	
						});
			  	}else{
					this.setState({

							error_message : 'user password incorrect'
	
						});
				}


		}else{
			this.setState({

							error_message : 'user name not on file'
	
						});
		console.log(this._user_pwd.name)
		console.log(this._user_pwd.value);
		}
		
			
	this._user_name.value='';
	this._user_pwd.value='';
	}
		


		render(){
		
			return(
		
				<div class='f_inputcontent'>
					<label>Input your name</label>
					<input name='user_name' ref={(a) => this._user_name = a}></input>
					<label>Input your comment</label>
					<input name='user_pwd' type='password' ref={(a) => this._user_pwd = a}></input>
					<button type='button' class='btn btn-promary' onClick={this.handleOnsubmit.bind(this)}>Submit</button>
				
				
				<h4>{this.state.error_message}</h4>
				</div>
			);


}}