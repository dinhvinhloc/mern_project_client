import axios, { HOST } from "../utils/httpUtilities";

const GET_AWARDS_ENDPOINT = `${HOST}/awards/user`;
const AWARD_DETAIL_ENDPOINT = `${HOST}/awards`;
const ADD_AWARD_ENDPOINT = `${HOST}/awards`;

export function getAllAwards(payload) {
  return axios.get(`${GET_AWARDS_ENDPOINT}/${payload.userId}`);
}

export function deleteAward(awardId) {
  return axios.delete(`${AWARD_DETAIL_ENDPOINT}`, {data: {
      id: awardId
  }});
}

export function addAward(payload) {
  return axios.post(`${ADD_AWARD_ENDPOINT}`, payload);
}

export function detailAward(awardId) {
  return axios.get(`${AWARD_DETAIL_ENDPOINT}/${awardId}`);
}

export function updateAward(payload) {
  return axios.put(`${AWARD_DETAIL_ENDPOINT}`, payload);
}
