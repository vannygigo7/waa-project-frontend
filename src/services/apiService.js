import http from "../config/http";

export default function apiService(endpoint){

    this.getAll = () =>{
        return http.get(endpoint);
    }

    this.getById = (id) =>{
        return http.get(`${endpoint}/${id}`);
    }

    this.add = (data) =>{
        return http.post(endpoint, data);
    }

    this.update = (id, data) =>{
        return http.put(`${endpoint}/${id}`, data);
    }

    this.remove = (id) =>{
        return http.delete(`${endpoint}/${id}`);
    }
}