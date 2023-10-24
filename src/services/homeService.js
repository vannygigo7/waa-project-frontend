import apiService from "./apiService";
import {HOME_ENDPOINT} from "../constant/endpoint";

const HomeService = new apiService(HOME_ENDPOINT);
export default HomeService;