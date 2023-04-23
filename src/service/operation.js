import axios from "axios";

axios.defaults.baseURL = "https://6442f9d390738aa7c0699804.mockapi.io/";

export async function getUsers(pageNum) {
  return await axios.get(`users?page=${pageNum}&limit=3`);
}

export async function getAllUsers() {
  return await axios.get(`users`);
}

export async function changeUser(id, user) {
  await axios.put(`users/${id}`, user);
}
