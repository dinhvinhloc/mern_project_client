import axios, { HOST } from "../utils/httpUtilities";
import LocalStorageService from './../utils/localStorage';

const LOGIN_ENDPOINT = `${HOST}/auth`;
const REGISTER_ENDPOINT = `${HOST}/users`;

export function login(payload) {
    return axios.post(LOGIN_ENDPOINT, payload);
}


export function register(payload) {
    return axios.post(REGISTER_ENDPOINT, payload);
}

export function isLogin() {
    return LocalStorageService.getUserInfo() != null;
}