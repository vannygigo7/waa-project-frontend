import {combineReducers} from "redux";
import productReducer from "../../features/product/ProductSlice";

export const allReducers = combineReducers({products: productReducer});