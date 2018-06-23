import axios from "axios";

export function PRODUCTS_FETCHING() {
  return function(dispatch) {
    dispatch({type: "PRODUCTS_FETCHING"});

    axios.post('http://localhost:9000/auth/login')
    .then(function (response) {
      
      console.log(response);
      dispatch({type: "PRODUCTS_FETCHED", payload: response.data})
    })
    .catch(function (error) {
      
      console.log('error Data',error);
      dispatch({type: "PRODUCTS_FETCH_FAIL", payload: error.message})
    });

}
}