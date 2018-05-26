import React, { Component } from 'react';

export default class TodoAppDisplay extends React.Component {

	constructor(){
super();

this.Createtask.bind(this);

}


deletetask(key){
	

this.props.deleteItem(key);


}



edititem1(key){

this.props.editItem(key);

}

saveEditItem(key) {
	this.props.saveEditItem(this._inputElement.value, key)
}

cancelItem(key){

this.props.cancelItem(this._inputElement.value, key)
}

Createtask(item){
	if(item.edit === true) {
		return (
			<div>
				<input  ref={(a) => this._inputElement = a}></input>
     			<button type='button' onClick={() => this.saveEditItem(item.key)}>save</button>
     			<button type='button' onClick={() => this.cancelItem(item.key)}>Cancel</button>
		   </div>)
	}
	else {
		return (
	<div key={item.key}>
	<li>
		{item.text} 
		{item.key} 
		{this.props.time1}
	</li> 
			<button type='button' onClick={this.deletetask.bind(this,item.key)}>delete</button>
			<button type='button' onClick={this.edititem1.bind(this,item.key)}>edit</button>
		</div>
		);
	
	}

}



render(){

	var todoEntries = this.props.entries;
	var listItems = todoEntries.map((item)=> this.Createtask(item));

return (
<div>
		<ul>{listItems} </ul>
		
</div>
);
}
};