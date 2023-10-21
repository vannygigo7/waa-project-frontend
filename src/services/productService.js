import {PRODUCT_ENDPOINT} from "../constant/endpoint";
import apiService from "./apiService";

const ProductService = new apiService(PRODUCT_ENDPOINT);
export default ProductService;