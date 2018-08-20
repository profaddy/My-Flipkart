import React from 'react';
import ProductListItems from './ProductsLIstItems'
import './index.css'
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
import {ADD_ITEM} from "../../actions/cartActions"
import {CartItemQuantity} from "../Products/Cart/index"

 function ProductListing(props) {

    const content = props.product.map(product => {

            return(
                <ProductListItems
                  product={product}
                  cart={CartItemQuantity(props.cart)}
                /> 
              );
           })

    return(
      
      <div className='productListing-container'>
          {content}
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

