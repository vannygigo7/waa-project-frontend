import {SELLER_PRODUCT_ENDPOINT} from "../constant/endpoint";
import apiService from "./apiService";

const SellerProductService = new apiService(SELLER_PRODUCT_ENDPOINT);
export default SellerProductService;

