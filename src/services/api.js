import axios from "axios";

const apiURL = "https://academia-augusto.onrender.com";

export default function api() {
  return axios.create({ baseURL: apiURL });
}
