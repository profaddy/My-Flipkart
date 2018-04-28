import React, { Component } from 'react';


export default class F_apicall extends React.Component {

	constructor(){

		super();
		this.state = {
			pictures:[]
		}
		
	}


componentDidMount(){

fetch('https://randomuser.me/api/?results=500')
.then(results => {
	console.log(results)
		return results.json().then(data => {
			console.log(data)
			let pictures = data.results.map((pic) => {

				return (
					<div key={pic.email}>
					<img src={pic.picture.medium} />
					</div>
					)
					})

	this.setState({

					pictures : pictures
	
					});

})
	
})
}

	render(){

		return(
				<div>
				<h1>Apicall</h1>
				{this.state.pictures.length ===0 ? null : this.state.pictures}	
				</div>

		);
	}


}