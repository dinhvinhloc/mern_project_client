import axios, { HOST } from "../utils/httpUtilities";

const GET_SKILLS_ENDPOINT = `${HOST}/skills/user`;
const SKILL_DETAIL_ENDPOINT = `${HOST}/skills`;
const ADD_SKILL_ENDPOINT = `${HOST}/skills`;

export function getAllSkills(payload) {
    return axios.get(`${GET_SKILLS_ENDPOINT}/${payload.userId}`);
}

export function deleteSkill(skillId) {
    return axios.delete(`${SKILL_DETAIL_ENDPOINT}`, {data: {
        id: skillId
    }});
}

export function addSkill(payload) {
    return axios.post(`${ADD_SKILL_ENDPOINT}`, payload);
}

export function detailSkill(skillId) {
    return axios.get(`${SKILL_DETAIL_ENDPOINT}/${skillId}`);
}

export function updateSkill(payload) {
    return axios.put(`${SKILL_DETAIL_ENDPOINT}`, payload);
}


