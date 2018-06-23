import React from 'react';
import './index.css'
export default function ProductListItems(props) {

  return(
    <div className='product-list-item'>
     <h3> {props.product.name}</h3>
     <img
      height={100}
      title={props.product.name}
      src={`/products/${props.product.image}` }
      />
      <div>{props.product.description}</div>
      <div>Rs.{props.product.price}</div>
      <div><button>Add to cart</button></div>
    </div>
);
}