
import React, { Component } from 'react';

export default class InputForm extends React.Component {
	state={
		dispaly: false
	}

handleInputchange(e){

	
	const {name,value} =  this.contentcontainer;
	

this.props.changeTitle2(name,value);
	
	
}

handleOnSubmit(){

this.setState({dispaly: true});


}

render() {
       


    return (
    	
      	<div>

		      <form>
		      
		     <div class='app'>
		     <label>Enter the Blog title</label>
			      <input name='blog_title'  ref={(a) => this.contentcontainer = a} onChange={this.handleInputchange.bind(this)} />
			    </div>
			    <div>
			    <label>Enter the Blog content</label>
			      <input type="textarea" name='content' ref={(a) => this.contentcontainer = a} onChange={this.handleInputchange.bind(this)} /> 
			      <button type='button' onClick={this.handleOnSubmit.bind(this)}>Submit</button>
			      </div>
			    </form>

			    {this.state.dispaly && 
			    	<div>
			    	<ul>
			    	<li>{this.props.blog_date}</li>
			    	<li>{this.props.blog_name}</li>
			    	<li>{this.props.blog_title}</li>
			    	<li>{this.props.blog_content}</li>
			    	</ul>

			       </div>
			}
		</div>	 
	);	 
}	
}    