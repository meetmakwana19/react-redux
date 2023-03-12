import changeNum from "./upDown";

// to combine multiple reducers, using Redux :
// combineReducers is an object thats why in curly braces
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNum,
})

export default rootReducer;