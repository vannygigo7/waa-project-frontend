import {TEST_PRODUCT_ENDPOINT} from "../constant/endpoint";
import apiService from "./apiService";

const TestProductService = new apiService(TEST_PRODUCT_ENDPOINT);
export default TestProductService;

