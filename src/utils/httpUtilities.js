import axios from "axios";
import LocalStorageService from './localStorage';
import 'dotenv/config';
import { createBrowserHistory } from "history";

export const HOST = process.env.REACT_APP_API_HOST || 'http://localhost:5000/api'


const axios_auth = axios.create();
const history = createBrowserHistory();

axios_auth.interceptors.request.use(
    config => {
        const token = LocalStorageService.getAccessToken();
        if (token) {
            config.headers["x-auth-token"] = `${token}`;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    }
);

axios_auth.interceptors.response.use((response) => {
    if (response.status === 401) {
        history.push('/login');
    }
    return response;
}, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }

    return Promise.reject(error.message)
});

export default axios_auth;