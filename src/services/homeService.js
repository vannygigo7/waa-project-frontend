import apiService from "./apiService";
import {HOME_ENDPOINT} from "../constant/endpoint";
import http from "../config/http";
import { header } from "../config/header";

let HomeService = new apiService(HOME_ENDPOINT);

const searchHomeProducts = (params) => {
    return http.get(HOME_ENDPOINT, {params}, {headers: header()});
}

HomeService = {...HomeService, searchHomeProducts};

export default HomeService;