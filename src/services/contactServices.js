import axios, { HOST } from "../utils/httpUtilities";

const GET_CONTACTS_ENDPOINT = `${HOST}/contacts/user`;
const CONTACT_DETAIL_ENDPOINT = `${HOST}/contacts`;
const ADD_CONTACT_ENDPOINT = `${HOST}/contacts`;

export function getAllContacts(payload) {
  return axios.get(`${GET_CONTACTS_ENDPOINT}/${payload.userId}`);
}

export function deleteContact(contactId) {
  return axios.delete(`${CONTACT_DETAIL_ENDPOINT}`, {data: {
      id: contactId
  }});
}

export function addContact(payload) {
  return axios.post(`${ADD_CONTACT_ENDPOINT}`, payload);
}

export function detailContact(contactId) {
  return axios.get(`${CONTACT_DETAIL_ENDPOINT}/${contactId}`);
}

export function updateContact(payload) {
  return axios.put(`${CONTACT_DETAIL_ENDPOINT}`, payload);
}