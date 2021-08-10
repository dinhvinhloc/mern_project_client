import axios, { HOST } from "../utils/httpUtilities";

const GET_ABOUTME_ENDPOINT = `${HOST}/aboutme/user`;
const ABOUTME_DETAIL_ENDPOINT = `${HOST}/aboutme`;
const ADD_ABOUTME_ENDPOINT = `${HOST}/aboutme`;

export function getAllAboutme(payload) {
    return axios.get(`${GET_ABOUTME_ENDPOINT}/${payload.userId}`);
}

export function deleteAboutme(aboutmeId) { 
    return axios.delete(`${ABOUTME_DETAIL_ENDPOINT}`, {data: {
        id: aboutmeId
    }});
}

export function addAboutme(payload) {
    return axios.post(`${ADD_ABOUTME_ENDPOINT}`, payload);
}

export function detailAboutme(aboutmeId) {
    return axios.get(`${ABOUTME_DETAIL_ENDPOINT}/${aboutmeId}`);
}

export function updateAboutme(payload) {
    return axios.put(`${ABOUTME_DETAIL_ENDPOINT}`, payload);
}


