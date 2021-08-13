import axios, { HOST } from "../utils/httpUtilities";

const GET_EDUCATIONS_ENDPOINT = `${HOST}/educations/user`;
const EDUCATION_DETAIL_ENDPOINT = `${HOST}/educations`;
const ADD_EDUCATION_ENDPOINT = `${HOST}/educations`;

export function getAllEducations(payload) {
    return axios.get(`${GET_EDUCATIONS_ENDPOINT}/${payload.userId}`);
}

export function deleteEducation(educationId) {
    return axios.delete(`${EDUCATION_DETAIL_ENDPOINT}`, {data: {
        id: educationId
    }});
}

export function addEducation(payload) {
    return axios.post(`${ADD_EDUCATION_ENDPOINT}`, payload);
}

export function detailEducation(educationId) {
    return axios.get(`${EDUCATION_DETAIL_ENDPOINT}/${educationId}`);
}

export function updateEducation(payload) {
    return axios.put(`${EDUCATION_DETAIL_ENDPOINT}`, payload);
}