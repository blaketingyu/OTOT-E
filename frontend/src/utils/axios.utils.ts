import axios from "axios";

export const axiosObj = axios.create({
  baseURL: process.env.backend_url || "http://localhost:8080",
  timeout: 1000,
});
