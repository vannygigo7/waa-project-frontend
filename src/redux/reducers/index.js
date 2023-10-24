import {combineReducers} from "redux";
import testProductReducer from "../../features/testproduct/TestProductSlice";
import sellerProductReducer from "../../features/seller/product/SellerProductSlice";
import homeProductReducer from "../../features/seller/product/SellerProductSlice";
import customerReducer from "../../features/customer/CustomerSlice";

export const allReducers = combineReducers({
    testProducts: testProductReducer,
    sellerProducts: sellerProductReducer,
    homeProducts: homeProductReducer,
    customerAuctions: customerReducer
});