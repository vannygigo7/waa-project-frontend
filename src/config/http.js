import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080/api/',
    // baseURL: 'https://auction.thearaseng.com:8080/api',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMUBleGFtcGxlLmNvbSIsImlzcyI6Ik1JVSIsImlhdCI6MTY5ODEwODM1MSwiZXhwIjoxNzAxNzA4MzUxLCJyb2xlIjoiVVNFUiJ9.dKo6QdydIXxTC6_zrzNoEERY0Vs2vGRoRQIaDKErh-jsO7T2SqruKflRa6kIh6tFZ5_a_Bs05mV1rGgn1oZugA'
        // 'Authorization': 'bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZWxsZXIxQGV4YW1wbGUuY29tIiwiaXNzIjoiTUlVIiwiaWF0IjoxNjk4MTA2MDYwLCJleHAiOjE3MDE3MDYwNjAsInJvbGUiOiJTRUxMRVIifQ.zVsNrL1IAULCI9iFL9gw_YDmrDZf_t_z7ugUhtIsCrbg0AMAadQYwxBWYQcCaCH3Nmy3fmKADdEF3r6n4Cjz-g'
    }
});