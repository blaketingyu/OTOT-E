import axios from "axios";

export const axiosObj = axios.create({
  baseURL: process.env.backend_url || "https://otot-b-bwo66nc7ba-as.a.run.app/",
  timeout: 1000,
});
