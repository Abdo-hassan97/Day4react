import { combineReducers } from "redux";
import toggleReducer from './toggle';



export default combineReducers({
    Togle:toggleReducer,
    
})