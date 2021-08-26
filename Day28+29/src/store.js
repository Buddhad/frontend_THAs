import rootReducer from "./reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'

const store=createStore(rootReducer ,applyMiddleware(thunk));
export default store;



// http://api.weatherapi.com/v1/current.json?key=c97150e403134b5ba4f75416210308&q=Mumbai