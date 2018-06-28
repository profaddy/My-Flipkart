import React from 'react';
import './index.css'
import {ADD_ITEM} from "../../actions/cartActions"
import { connect } from "react-redux"
import {bindActionCreators} from "redux";


 class ProductListItems extends React.Component  {

  constructor(){
    super();
    
    }
  
    render(){
      console.log('products',this.props)
  var itemInCart = this.props.cart.filter(item => item.id === this.props.product.id)[0];
  return(
    <div className='product-list-item col-sm-6'>
      
     <h3> {this.props.product.name}</h3>
     <img
      height={100}
      title={this.props.product.name}
      src={`/products/${this.props.product.image}` }
      />
      <div>{this.props.product.description}</div>
      <div>Rs.{this.props.product.price}</div>
      <div>
      <button onClick={ () => this.props.dispatch(ADD_ITEM(this.props.product))}>
      Add to cart({(itemInCart && itemInCart.quantity) || 0})
      </button></div>
    </div>
);
    }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addToCart: ADD_ITEM
  }, dispatch);
};

export default connect(mapDispatchToProps)(ProductListItems);
