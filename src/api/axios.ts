import axios from "axios";
//create an Axios instance with a config to prevent us from repeating these options in every request

// const BASE_URL = import.meta.env.VITE_BASE_URL;
// const BASE_URL = "/api/";
const BASE_URL = "https://www.rent2ownauto.com.au/api";

export const publicApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
