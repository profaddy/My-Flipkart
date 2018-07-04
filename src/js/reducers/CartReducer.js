export default function cartReducer(state=[

  


], action) {

  switch (action.type) {
    
    case "ADD_ITEM" :{
      
     let newState = [...state,action.payload]
    
    
      return newState

    }

    
  }
  return state

}