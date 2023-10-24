import http from "../config/http";
import { LOGIN_ENDPOINT } from "../constant/endpoint";

export const loginService = (data) => {
    return http.post(LOGIN_ENDPOINT, data)
}