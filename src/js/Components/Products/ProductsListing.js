import React from 'react';
import ProductListItems from './ProductsLIstItems'
import './index.css'

export default function ProductListing(props) {

  return(
    <div className='products-listing'>
    {
      props.products.map(product => 
        <ProductListItems product={product} />
      )
    }
    </div>

  );
}

