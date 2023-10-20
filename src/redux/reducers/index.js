import {combineReducers} from "redux";
import productReducer from "./product";

export const allReducers = combineReducers({products: productReducer});