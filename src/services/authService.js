import http from "../config/http";
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from "../constant/endpoint";

export const loginService = (data) => {
    return http.post(LOGIN_ENDPOINT, data)
}

export const registerService = (data) => {
    return http.post(REGISTER_ENDPOINT, data)
}