const INITIAL_STATE = {
    lang: true,
    FavList:[]
  
  };
  
  export default function toggleReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_TOGGLE":
        debugger;
        console.log(action);
        return {
          ...state,
         // lang : action.payload,
          FavList:action.payload
        };
      default:
        return state;
    }
  }
  