import {CUSTOMER_PRODUCT_ENDPOINT} from "../constant/endpoint";
import apiService from "./apiService";
import http from "../config/http";

let CustomerService = new apiService(CUSTOMER_PRODUCT_ENDPOINT);

const addBid = ({auctionId, data}) => {
    return http.post(CUSTOMER_PRODUCT_ENDPOINT + `/${auctionId}`, data);
}

CustomerService = {...CustomerService, addBid};
export default CustomerService;
