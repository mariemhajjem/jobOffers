import { combineReducers } from "redux"; 
import auth from "./auth"; 

const rootReducer = () => {
  return combineReducers({
    auth, 
  });
};

export default rootReducer;