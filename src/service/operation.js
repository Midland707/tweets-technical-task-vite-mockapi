import axios from "axios";

axios.defaults.baseURL = "https://6442f9d390738aa7c0699804.mockapi.io/";

export async function getUsers() {
  return await axios.get(`users`);
}

export async function changeUser(id, user) {
  await axios.post(`users/${id}`, user);
}
