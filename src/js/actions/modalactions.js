import axios from "axios";

/*export function fetch_user_details() {
  return function(dispatch) {
  dispatch({type: "FETCH_USER_DETAILS"});
    
    
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    
    axios.get("http://rest.learncode.academy/api/reacttest/tweets")
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}*/

export function Toggle_login() {
  console.log('test action hit')
 return {
  type: 'Toggle_login',
  payload:{},
 }
}

export function Toggle_login_off() {
 return {
  type: 'Toggle_login_off'
 }
}

export function Toggle_signup() {
  console.log('test action hit')
 return {
  type: 'Toggle_signup',
  payload:{},
 }
}

export function Toggle_signup_off() {
 return {
  type: 'Toggle_signup_off'
 }
}