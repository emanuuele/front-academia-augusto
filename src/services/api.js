import axios from "axios";

const apiURL = "https://academia-augusto.vercel.app";

export default function api() {
  return axios.create({ baseURL: apiURL });
}
