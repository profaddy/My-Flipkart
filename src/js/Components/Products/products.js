import React, { Component } from 'react'
import { Navlink } from 'react-router-dom';
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
import {PRODUCTS_FETCHING} from "../../actions/Products_actions"
//import {PRODUCTS_FETCHING} from "../../actions"

import axios from 'axios';


//axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';


	class Products extends React.Component {
	
			constructor(){
			super();
			this.state={
	
				value:'',
			};
	
			//bind functions here
	}

	componentDidMount(){

		this.props.dispatch(PRODUCTS_FETCHING());
	}
		
	render() {

		console.log('props products',this.props);			
		var Error_msg = this.props.products.isProducts_fetch_errormsg;
		console.log('this.props.handle_products.isProducts_fetch_errormsg')

	
		return(
			<div>
			{this.props.products.isProducts_fetching &&
			<div>Produts loading....</div>
			}
			{this.props.products.isProducts_fetch_error &&
				<div>{Error_msg} while fetching Products</div>
				}
			</div>);
	
		}
	}
	
	const mapStateToProps = state =>  ({
	
		products:state.products
		
	});
	export default connect(mapStateToProps)(Products);
	
/*const mapDispatchToProps = (dispatch) => {
		/* code change */
		//return bindActionCreators({
		///	USER_LOGIN: USER_LOGIN
	//	}, dispatch);
	//};
	
	