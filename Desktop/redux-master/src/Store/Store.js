import { combineReducers, createStore } from "redux";
import reducer from "../Reducer/Reducer";
const store=createStore(combineReducers({reducer}))
export default store;