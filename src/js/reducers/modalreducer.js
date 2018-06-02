export default function reducer(state={
    handlemodal: {
     show_login:false,
     show_signup:false
    },
  }, action) {

    switch (action.type) {
      
      case "Toggle_login": {
        let newState = {...state}
        newState.handlemodal.show_login = true;
        return newState;
        break;
      }

       case "Toggle_login_off": {
        let newState = {...state}
        newState.handlemodal.show_login = false;
        return newState;
        break;
        
      }

      case "Toggle_signup": {
        let newState = {...state}
        newState.handlemodal.show_signup = true;
        return newState;
        break;
      }

       case "Toggle_signup_off": {
        let newState = {...state}
        newState.handlemodal.show_signup = false;
        return newState;
        break;
        
      }
    }
    return state
  
}