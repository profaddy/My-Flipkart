export default function reducer(state={
    items: [],
    fetching: false,
    fetched: false,
    error: null,
    edit:false
    
  }, action) {

    switch (action.type) {
      case "FETCH_Todo": {
        return {...state, fetching: true}
      }
      /*case "FETCH_TWEETS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_TWEETS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          tweets: action.payload,
        }
      }*/
      case "ADD_Todo": {
        console.log('reducer',action.payload)
        return {
          ...state,
          items: [...state.items, action.payload],
        }

      }
      case "UPDATE_Todo": {
        const { id, text } = action.payload
        const newItems = [...state.items]
        const itemToUpdate = newItems.findIndex(item => item.id === id)
        newItems[itemToUpdate] = action.payload;

        return {
          ...state,
          items: newItems,
          edit:false
        }
      }
      case "DELETE_Todo": {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
        }
      }

      case "TOGGLE_edit_switch" : {

        return {
          ...state,
          edit:true
          

        }
      }
    }




    return state
}
