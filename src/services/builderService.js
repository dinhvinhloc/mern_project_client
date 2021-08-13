import axios, { HOST } from "../utils/httpUtilities";

const GET_RESUME_ENDPOINT = `${HOST}/resumes/user`;
const ADD_RESUME_ENDPOINT = `${HOST}/resumes`;
// const RESUME_DETAIL_ENDPOINT = `${HOST}/resumes`;

export function getAllResumes(payload) {
    return axios.get(`${GET_RESUME_ENDPOINT}/${payload.userId}`);
}

export function createResume(payload) {
    return axios.post(`${ADD_RESUME_ENDPOINT}`, payload);
}

// export function detailResume(payload) {
//     return axios.get(`${RESUME_DETAIL_ENDPOINT}/${payload.userId}`);
// }