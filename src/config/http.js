import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: 'http://localhost:8080/api/',
    // baseURL: 'https://auction.thearaseng.com:8080/api/v1/',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZWxsZXIxQGV4YW1wbGUuY29tIiwiaXNzIjoiTUlVIiwiaWF0IjoxNjk4MTA2MDYwLCJleHAiOjE3MDE3MDYwNjAsInJvbGUiOiJTRUxMRVIifQ.zVsNrL1IAULCI9iFL9gw_YDmrDZf_t_z7ugUhtIsCrbg0AMAadQYwxBWYQcCaCH3Nmy3fmKADdEF3r6n4Cjz-g'
    }
});