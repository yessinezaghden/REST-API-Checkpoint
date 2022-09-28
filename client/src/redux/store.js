import reducer from "./reducer"
import thunk from "redux-thunk"
import { applyMiddleware,createStore, compose } from "redux"



const devtools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store =createStore(reducer,compose(applyMiddleware(thunk), devtools));
export default store;