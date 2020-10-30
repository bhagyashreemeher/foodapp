import axios from "axios";

export const API_URL = "https://invincible-ms.herokuapp.com/api";
export const Axios = axios.create({baseURL: API_URL});
