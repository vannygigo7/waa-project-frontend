import axios from 'axios';
import { header } from './header';

export default axios.create({
    baseURL: 'http://localhost:8080/api/',
    // baseURL: 'https://auction.thearaseng.com:8080/api',
    timeout: 2000,
});