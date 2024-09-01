import axios from "axios";
//create an Axios instance with a config to prevent us from repeating these options in every request

const BASE_URL = import.meta.env.VITE_BASE_URL;
// const BASE_URL = "/api/";
// const BASE_URL = "https://www.rent2ownauto.com.au/api";

export const publicApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateApi = axios.create({
  baseURL: BASE_URL,
});

privateApi.interceptors.request.use(
  (config) => {
    const sessionToken = localStorage.getItem("session_token");
    if (sessionToken && config.headers) {
      config.headers.Authorization = `Bearer ${sessionToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

privateApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("session_token");
      window.location.href = "/sign-in"; // Redirect to login
    }
    return Promise.reject(error);
  }
);
