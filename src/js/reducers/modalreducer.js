export default function reducer(state={
    handlemodal: {
     show_login:false,
     show_signup:false
    },
    data:{},
    fetching_error:'error not catched',
    fetching_user:'',
    isError:false
  }, action) {

    switch (action.type) {
      
      case "Toggle_login": {
        let newState = {...state}
        newState.handlemodal.show_login = true;
        newState.handlemodal.show_signup = false;
        return newState;
        break;
      }

       case "Toggle_login_off": {
        let newState = {...state}
        newState.handlemodal.show_login = false;
        newState.isError = false;
        return newState;
        break;
        
      }

      case "Toggle_signup": {
        let newState = {...state}
        newState.handlemodal.show_signup = true;
        newState.handlemodal.show_login = false;
        return newState;
        break;
      }

       case "Toggle_signup_off": {
        let newState = {...state}
        newState.handlemodal.show_signup = false;
        newState.isError = false;
        return newState;
        break;
        
      }

      case "USER_LOGIN" :{
        let newState = {...state}
        newState.fetching_user = true;
        return newState;

      }

      case "USER_VALIDATED_OK" :{
        let newState = {...state}
        newState.fetching_user_ok = true;
        newState.fetching_user = false;
        newState.data = action.payload;
        console.log('responsedata',newState)
        return newState;

      }

      case "USER_VALIDATED_FAIL" :{
        let newState = {...state}
        newState.fetching_user_fail = true;
        newState.isError = true;
        newState.fetching_error = action.payload;
        return newState;

      }

      case "USER_SIGNUP" :{
        let newState = {...state}
        newState.fetching_user = true;
        return newState;

      }

      case "USER_SIGNUP_OK" :{
        let newState = {...state}
        newState.fetching_user_ok = true;
        newState.fetching_user = false;
        newState.data = action.payload;
        console.log('responsedata',newState)
        return newState;

      }

      case "USER_SIGNUP_FAIL" :{
        let newState = {...state}
        newState.fetching_user_fail = true;
        newState.isError = true;
        newState.fetching_error = action.payload;
        return newState;

      }
    }
    return state
  
}