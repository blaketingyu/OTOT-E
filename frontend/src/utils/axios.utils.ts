import axios from "axios";

export const axiosObj = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:8080",
  timeout: 1000,
});
