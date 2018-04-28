
import React, { Component } from 'react';
import TodoAppDisplay from './todoappdisplay';

export default class TodoApp extends React.Component {
constructor(){
super();
this.state={
	items:[],
	time1:'',
	edit:'false',
};

}	
addItem = (e)=> {

	var itemArray = this.state.items;

	if (this._inputElement.value !== "") {

	itemArray.unshift({
		text:this._inputElement.value,
		edit: false,
		key:new Date().toLocaleTimeString()

    });

	this.setState({
      items: itemArray
			});

	this._inputElement.value = "";
	}

}

 deleteItem(key){

      var filtereditems = this.state.items.filter(
      		function(item1){
      				return (item1.key !== key)

      		});

      this.setState({
      items: filtereditems
      
    });
      

     	

  }  

saveEditItem(value, key) {
	var itemArray = this.state.items;
	itemArray.map(item => {
		if(item.key ===key) {
			item.text = value
			item.edit= false
		} else {
			return item
		}
	})
	this.setState({items:itemArray})
}



cancelItem(value,key){

var itemArray = this.state.items;
	itemArray.map(item => {
		if(item.key ===key) {
			item.edit= false
		} else {
			return item
		}
	})
	this.setState({items:itemArray})
}


editItem(key){

var itemArray = this.state.items;
	itemArray.map(item => {
		if (item.key === key) {
			item.edit = true
			return item
		} else {
			return item
		}
	})
	this.setState({itemArray})
}

 	setClock() {
      	this.setState({

 		time1 : new Date().toLocaleTimeString()
 	}

 );

 }
     	
render() {
       
    return (
    	
    <div>
	 	<input ref={(a) => this._inputElement = a}></input>
     	<button type='button' onClick={this.addItem}>Add</button>
		<TodoAppDisplay 
		entries={this.state.items} 
		time1={this.state.time1} 
		saveEditItem={this.saveEditItem.bind(this)} 
		deleteItem={this.deleteItem.bind(this)} 
		editItem={this.editItem.bind(this)} 
		cancelItem={this.cancelItem.bind(this)} 
		/>
	</div>

						

						
						
      
      );
  }
}
