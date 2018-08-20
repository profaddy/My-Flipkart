
import axios from "axios";

 export function fetch_products() {
   console.log('i am in action file')
  return function(dispatch) {
  dispatch({type: "PRODUCTS_FETCHING"});
    
    axios.get("http://demo2769628.mockable.io/products")
      .then((response) => {
        dispatch({type: "PRODUCTS_FETCHED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "PRODUCTS_FETCH_FAIL", payload: err.message})
      })
  }
}