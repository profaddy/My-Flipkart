import React, { Component } from 'react';


export default class F_inputcomment extends React.Component {

	constructor(){

		super();
		this.state = {

			reply:false
		}
		

		
	}

handleOnreply(){

this.props.finputreplysubmit(this._inputreply.value)
 this.setState({
     					reply :true
			});

}

	handleOnsubmit(){
		
		console.log(this._inputcomment.name);
		console.log(this._inputcomment.value);
		console.log(this._inputname.name);
		console.log(this._inputname.value);
		
	
		
		
	
			this.props.finputcommentsubmit(this._inputname.value,this._inputcomment.value)
			this._inputcomment.value='';
			this._inputname.value='';
	
}

createReply(item){

return(


				<div key={item.key}>

				<div key={item.key}>
					Reply : {item.reply_comment}
				</div>
				<div>
				<input name='input_reply' ref={(a) => this._inputreply = a}></input>
<button type='button' class='btn btn-promary' onClick={this.handleOnreply.bind(this,this._inputreply,item.key)}>Reply</button>
				
				</div>
				</div>

				
			);
this.setState({
     					reply :false
			}); 


}

createComment(item){

		


				
		return(

				<div key={item.key}>
				<div>
				{item.name_person} posted the below comment at {item.key}
				</div>
				<div>
				Comment : {item.value_person}
				</div>
					<div>
					<input name='input_reply' ref={(a) => this._inputreply = a}></input>
	<button type='button' class='btn btn-promary' onClick={this.handleOnreply.bind(this,this._inputreply,item.key)}>Reply</button>
					
					</div>

				
				</div>


		); 

}
		render(){
			var comment_store_array = this.props.comment_store
			var listitmes  = comment_store_array.map((item) => this.createComment(item))	
			var comment_reply_array = this.props.handleonreply
			var replyitems  = comment_reply_array.map((item) => this.createReply(item));
			


		return(
		
				<div class='f_inputcontent'>
				<label>Input your name</label>
				<input name='input_name' ref={(a) => this._inputname = a}></input>
				<label>Input your comment</label>
				<input name='input_comment' ref={(a) => this._inputcomment = a}></input>

		
				
			<button type='button' class='btn btn-promary' onClick={this.handleOnsubmit.bind(this,this._inputcomment)}>Submit</button>
		
			<ul>{listitmes}</ul>
			<ul>{replyitems}</ul>
			

				</div>

		);
	}


}