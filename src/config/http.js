import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: 'http://localhost:8080/api',
    // baseURL: 'https://auction.thearaseng.com:8080/api',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTAxQGV4YW1wbGUuY29tIiwiaXNzIjoiTUlVIiwiaWF0IjoxNjk4MTc2MDg5LCJleHAiOjE2OTg1MzYwODksInJvbGUiOiJVU0VSIn0.438nny_UaSkXiiqbaIxDY0oXvER1LcFkggo-9lFjqRYUdp19aSp9qgv9yuGYU3gxS7AuC-Nr25WwKuqPjt2rUQ'
        // 'Authorization': 'bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZWxsZXIxQGV4YW1wbGUuY29tIiwiaXNzIjoiTUlVIiwiaWF0IjoxNjk4MTA2MDYwLCJleHAiOjE3MDE3MDYwNjAsInJvbGUiOiJTRUxMRVIifQ.zVsNrL1IAULCI9iFL9gw_YDmrDZf_t_z7ugUhtIsCrbg0AMAadQYwxBWYQcCaCH3Nmy3fmKADdEF3r6n4Cjz-g'
    }
});