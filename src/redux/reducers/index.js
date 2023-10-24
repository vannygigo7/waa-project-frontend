import {combineReducers} from "redux";
import testProductReducer from "../../features/product/ProductSlice";
import sellerProductReducer from "../../features/seller/product/SellerProductSlice";
import homeProductReducer from "../../features/seller/product/SellerProductSlice";


export const allReducers = combineReducers({
    testProducts: testProductReducer,
    sellerProducts: sellerProductReducer,
    homeProducts: homeProductReducer
});