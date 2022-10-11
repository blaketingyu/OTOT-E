import axios from "axios";

export const axiosObj = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:8080",
  timeout: 1000,
});

export const axiosCountries = axios.create({
  baseURL:
    process.env.REACT_APP_COUNTRIES_API_ENDPOINT || "http://localhost:8080",
});
