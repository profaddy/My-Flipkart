import React, { Component } from 'react'
import { Navlink } from 'react-router-dom';
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
axios.defaults.headers.post['Content-Type'] = 'application/json';


	class Cart extends React.Component {
	
			constructor(){
			super();
			this.state={
	
				value:'',
			};
	
			//bind functions here
	}

	componentDidMount(){

	
	}
		
	render() {

		console.log('props products',this.props);			
    var Cart_items = this.props.cart.data.map{(item) => }
    
		return(
			<div>
		
			</div>);
	
		}
	}
	
	const mapStateToProps = state =>  ({
	
		products:state.products
		
	});
	export default connect(mapStateToProps)(Cart);
	
/*const mapDispatchToProps = (dispatch) => {
		/* code change */
		//return bindActionCreators({
		///	USER_LOGIN: USER_LOGIN
	//	}, dispatch);
	//};
	
	