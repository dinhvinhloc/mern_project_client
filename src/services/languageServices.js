import axios, { HOST } from "../utils/httpUtilities";

const GET_LANGUAGES_ENDPOINT = `${HOST}/languages/user`;
const LANGUAGE_DETAIL_ENDPOINT = `${HOST}/languages`;
const ADD_LANGUAGE_ENDPOINT = `${HOST}/languages`;

export function getAllLanguages(payload) {
    return axios.get(`${GET_LANGUAGES_ENDPOINT}/${payload.userId}`);
}

export function deleteLanguage(languageId) {
    return axios.delete(`${LANGUAGE_DETAIL_ENDPOINT}`, {data: {
        id: languageId
    }});
}

export function addLanguage(payload) {
    return axios.post(`${ADD_LANGUAGE_ENDPOINT}`, payload);
}

export function detailLanguage(languageId) {
    return axios.get(`${LANGUAGE_DETAIL_ENDPOINT}/${languageId}`);
}

export function updateLanguage(payload) {
    return axios.put(`${LANGUAGE_DETAIL_ENDPOINT}`, payload);
}


