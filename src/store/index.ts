import { createStore, combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import newsReducer from "./news/reducers";


const rootReducer = combineReducers({
    newsReducer,
})
const store =createStore(
    rootReducer,composeWithDevTools(applyMiddleware(thunk))
)

export default store