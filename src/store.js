import { legacy_createStore as createStore } from "redux";

import rootReducer from "./reducers/index";

// creating a store for app 
// rootReducer has all application's states which goes to the createStoreHook
const store = createStore(rootReducer,
    // adding redux devtools for the store
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;