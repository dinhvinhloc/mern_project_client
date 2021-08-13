import axios, { HOST } from "../utils/httpUtilities";

const GET_EXPERIENCES_ENDPOINT = `${HOST}/experiences/user`;
const EXPERIENCE_DETAIL_ENDPOINT = `${HOST}/experiences`;
const ADD_EXPERIENCE_ENDPOINT = `${HOST}/experiences`;

export function getAllExperiences(payload) {
    return axios.get(`${GET_EXPERIENCES_ENDPOINT}/${payload.userId}`);
}

export function deleteExperience(experienceId) {
    return axios.delete(`${EXPERIENCE_DETAIL_ENDPOINT}`, {data: {
        id: experienceId
    }});
}

export function addExperience(payload) {
    return axios.post(`${ADD_EXPERIENCE_ENDPOINT}`, payload);
}

export function detailExperience(experienceId) {
    return axios.get(`${EXPERIENCE_DETAIL_ENDPOINT}/${experienceId}`);
}

export function updateExperience(payload) {
    return axios.put(`${EXPERIENCE_DETAIL_ENDPOINT}`, payload);
}


