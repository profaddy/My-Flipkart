import React, { Component } from 'react'
import { Navlink,history } from 'react-router-dom';
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
import Header from "../../Common/Header/header"
import {CartItemQuantity} from '../Cart/index'
import ProductListItems from '../../Products/ProductsLIstItems'
import {Toggle_login,Toggle_login_off,Toggle_signup,Toggle_signup_off} from "../../../actions/modalactions"
//axios.defaults.headers.post['Content-Type'] = 'application/json';


	class Cart extends React.Component {
	
			constructor(){
			super();
			this.state={
	
				value:'',
			};
	
			//bind functions here
	}

	//componentWillMount(){
		//	if (this.props.user.isUserloggedin === true)
		//	{
			//	this.props.dispatch(Toggle_login())
		//	}

	
	//}

	componentDidMount(){

	
	}


		
	render() {

		console.log('props products',this.props);			
		//var itemInCart = this.props.cart.filter(item => item.id === this.props.product.id)[0];cart
		var itemIncart = this.props.cart.map(items => {
						return(
							<div id={items.id}>
							
						{items.name}
							
						<ProductListItems
						product={items}
						//addToCart={props.addTocart}
					 // totIteminCart={totIteminCart}
						cart={CartItemQuantity(this.props.cart)} />
							</div>
						);
		})
		console.log('cart tems',itemIncart)
	
    
		return(<div>
			<Header />
			{itemIncart}
			
		</div>);
	
		}
	}
	
	const mapStateToProps = state =>  ({
	
		products:state.products,
		cart:state.cart,
		user:state.user.user
		
	});
	export default connect(mapStateToProps)(Cart);
	
/*const mapDispatchToProps = (dispatch) => {
		/* code change */
		//return bindActionCreators({
		///	USER_LOGIN: USER_LOGIN
	//	}, dispatch);
	//};
	
	