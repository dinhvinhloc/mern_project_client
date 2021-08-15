import axios, { HOST } from "../utils/httpUtilities";

const GET_HOBBIES_ENDPOINT = `${HOST}/hobbies/user`;
const HOBBY_DETAIL_ENDPOINT = `${HOST}/hobbies`;
const ADD_HOBBY_ENDPOINT = `${HOST}/hobbies`;

export function getAllHobbies(payload) {
  return axios.get(`${GET_HOBBIES_ENDPOINT}/${payload.userId}`);
}

export function deleteHobby(hobbyId) {
  return axios.delete(`${HOBBY_DETAIL_ENDPOINT}`, {data: {
      id: hobbyId
  }});
}

export function addHobby(payload) {
  return axios.post(`${ADD_HOBBY_ENDPOINT}`, payload);
}

export function detailHobby(hobbyId) {
  return axios.get(`${HOBBY_DETAIL_ENDPOINT}/${hobbyId}`);
}

export function updateHobby(payload) {
  return axios.put(`${HOBBY_DETAIL_ENDPOINT}`, payload);
}