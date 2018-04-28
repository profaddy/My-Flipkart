import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import InputForm from './Inputform';
import TodoApp from './Todoapp';
import F_comment from './f_comment';
import F_inputcomment from './f_inputcomment';
import F_comment_header from './f_comment_header';
//import F_apicall from './f_apicall';

export default class Layout extends React.Component {
constructor(){
super();
this.state={
	name:"addy",
	blog_title:"",
	content:"",
	date:"",
	date1:"",
	content1:[],
	comkment_store:[],
	reply_array:[],
	key_logic: 0,
	key_logic_reply: 0
};
}


componentWillMount(){

	this.setState({
	
	date1:new Date().toLocaleTimeString()})

 setInterval(() => {
		this.setState({
	
	date:new Date().toLocaleTimeString()})
	},1000)
}

changeTitle(name,value){

	var inputList = {name,value};

	inputList.unshift({
			content : value,
			key : new Date().toLocaleTimeString()

	});


	console.log(inputList)

  

this.setState({

	content1 : inputList
	
});




}

inputTest = (name,value)=> {

		
			var temp_comment_array = this.state.comkment_store
			var x = this.state.key_logic

			if (x>0)
			{
				 x= x + 1;
			}
				else {
			var x = 1 ;
	}
			temp_comment_array.unshift({
					name_person : name,
					value_person : value,
					key: x 


			});
	
			
			console.log('comment store array : ',temp_comment_array)

			this.setState({
     comkment_store :temp_comment_array,
     key_logic : x 
			});


	}

finputreplysubmit(replyinput){

	var y = this.state.key_logic_reply

			if (y>0)
			{
				 y= y + 1;
			}
				else {
			var y = 1 ;
	}

	var temp_reply_array = this.state.reply_array
	temp_reply_array.unshift({
					reply_comment : replyinput,
					key: y


			});
	console.log('reply comment store array : ',temp_reply_array)

			this.setState({
     reply_array :temp_reply_array,
     key_logic_reply : y
			});



}



//changeEmpname{
//ths.setstate({emp_name})
//
//}


  render() {

    return (
    	

      <div class='App-header'>
      {this.state.date}
      
     
      <Header   />
      
      
      <InputForm  
      changeTitle2={this.changeTitle.bind(this)} 
       blog_name={this.state.name} 
       blog_title={this.state.blog_title} 
       blog_content={this.state.content} 
       blog_date={this.state.date1}
        />
      <Footer   />
      <TodoApp />
      <F_comment />
      <F_comment_header />
      <F_inputcomment 
	finputcommentsubmit= {this.inputTest.bind(this)}
		comment_store={this.state.comkment_store} 
		finputreplysubmit= {this.finputreplysubmit.bind(this)}
		handleonreply={this.state.reply_array}
		/>
		<F_apicall />
      </div>

    );
  }
}


