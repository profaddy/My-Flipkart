export default function reducer(state={
  products: {},
  isProducts_fetched:false,
  isProducts_fetch_error:false,
  isProducts_fetching:false,
  isProducts_fetch_errormsg:'unknown error while fetching products',
  data:{},
  
 
}, action) {

  switch (action.type) {
    
    case "PRODUCTS_FETCHING" :{
      let newState = {...state}
      newState.isProducts_fetching = true;

      return newState;

    }

    case "PRODUCTS_FETCHED" :{
      console.log('peoducts fetched from productsreducer',action.payload)
      let newState = {...state}
      newState.isProducts_fetched = true;
      newState.isProducts_fetching = false;
      newState.products = action.payload;
      return newState;

    }

    case "PRODUCTS_FETCH_FAIL" :{
      let newState = {...state}
      newState.isProducts_fetch_error = true;
      newState.isProducts_fetch_errormsg = action.payload;
      newState.isProducts_fetching = false;
      return newState;

    }
  }
  return state

}