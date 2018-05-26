import React, { Component } from 'react'
import { connect } from "react-redux"
import {addTodo,updateTodo,deleteTodo,TOGGLE_edit_switch} from "../actions/tweetsactions"


class TodoApp extends React.Component {

		constructor(){
super();

this.Createtask.bind(this);

}


handleonSubmit(e){
		var todo_text = this._todo_name.value;
		const date = new Date().toLocaleTimeString()
		console.log(date)
		console.log(this._todo_name.value)
		this.props.dispatch(addTodo(date,todo_text))
		this._todo_name.value =''
}	

handleonedit(){

		this.props.dispatch(TOGGLE_edit_switch())
	}

handleonsaveitem(id){

		var edit_todo_text = this.edit_todo_name.value
		var item_id = this.props.items.id

		this.props.dispatch(updateTodo(id,edit_todo_text))
}

handleondelete(id){

	

		this.props.dispatch(deleteTodo(id))
}

Createtask(items){
		console.log('createtask id ',this.props.items)

		if (this.props.edit_item === true){
			return (
					<div>
						<label>Replace Todo {items.text}with your desired input </label>
						<input name='edittodoItem'ref={(a) => this.edit_todo_name = a}></input>
						<button type='button' onClick = {this.handleonsaveitem.bind(this,items.id)}>save</button>
						

					</div>
			);
		}else{
			return(

					<div key={items.id}>
						<li>
				    		{items.text}
							{items.id} 
						</li> 
						<button type='button' onClick = {this.handleonedit.bind(this,items.id)}>Edit Todo</button>
						<button type='button' onClick = {this.handleondelete.bind(this,items.id)}>Delete Todo Todo</button>
					</div>
			);
		}
}

	render() {
	       
	       	var todoEntries = this.props.items;
	       	console.log('render',this.props)
	       	console.log('todoentries',todoEntries)
			var listItems = todoEntries.map((items)=> this.Createtask(items));
		
			   return (
				    <div>
						<p>Todo Items</p>  
						<input name='todoItem' ref={(a) => this._todo_name = a}></input>
						<button type='button' onClick = {this.handleonSubmit.bind(this)}>Add Todo</button>
						{listItems}
					</div>
				);

	}
}

const mapStateToProps = state =>  ({
	
    items: state.items.items,
    edit_item : state.items.edit
	
});



export default connect(mapStateToProps)(TodoApp);
