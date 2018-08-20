import React, { Component } from 'react'
import { Navlink } from 'react-router-dom';
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
import {fetch_products} from "../../actions/Products_actions"
import ProductListItems from './ProductsLIstItems'
import {CartItemQuantity} from "../Products/Cart/index"
import LoadingView from '../LoadingView/LoadingView'

import axios from 'axios';


//axios.defaults.headers.post['Content-Type'] = 'application/json';
//axios.defaults.headers.post['Content-Type'] = 'application/json';


	class Products extends React.Component {
	
			constructor(props){
			super(props);
			this.state={
	
				value:'',
			};
	
			//bind functions here
	}

	componentWillMount(){
		console.log('i am in componentdidmount')

		this.props.dispatch(fetch_products());
	}
		
	render() {
		const myProducts  = this.props.products
		const myApiStatus = this.props.products_status

		let Error_msg = myApiStatus.isProducts_fetch_errormsg;
		let content;

		if(myProducts === undefined){
			content = (<LoadingView />);
		}else if(myApiStatus.isProducts_fetching === true){
			content = <div>Produts fetching....</div>
		}else if(myApiStatus.isProducts_fetch_error === true){
			content = <div><p>We apologise for the inconvinience caused due to {Error_msg} </p></div>
		}else{
		 	content = myProducts.map(product => {
			return(
						<ProductListItems
							product={product}
							cart={CartItemQuantity(this.props.cart)}
						/>
			);
								})
		}
	
		return(

				<div className='productListing-container'>
						{content}
				</div>
		);
	
	}
}
	
	const mapStateToProps = state =>  ({
	
		products:state.products.products.products,
		products_status:state.products,
		cart:state.cart
		
	});

	
	const mapDispatchToProps = (dispatch) => {
  
		return bindActionCreators({
			fetch_products: fetch_products
		}, dispatch);
	};
	export default connect(mapStateToProps)(Products);
	