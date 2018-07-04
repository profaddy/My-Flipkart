import React from 'react';
import ProductListItems from './ProductsLIstItems'
import './index.css'
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
import {ADD_ITEM} from "../../actions/cartActions"
import {CartItemQuantity} from "../Products/Cart/index"

 function ProductListing(props) {
  
  //let cart= CartItemQuantity(props.cart)
  //var itemInCart = cart.length
  //let totIteminCart = itemInCart //&& (totIteminCart + itemInCart.quantity)
  //console.log('tot cart_item',props.cart.totItem)
  console.log('show cart',props.cart)


  return(
  
    <div className='products-listing'>
    {
      props.products.map(product => 

        <ProductListItems
          product={product}
          //addToCart={props.addTocart}
         // totIteminCart={totIteminCart}
          cart={CartItemQuantity(props.cart)}
        />
      
      )
    }
    </div>
  

  );
}

const mapStateToProps = state =>  ({

  cart:state.cart
  
	
});

const mapDispatchToProps = (dispatch) => {
  /* code change */
  return bindActionCreators({
    addToCart: ADD_ITEM
  }, dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductListing);

