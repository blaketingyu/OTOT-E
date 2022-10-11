import axios from "axios";

export const axiosObj = axios.create({
  baseURL:
    process.env.API_ENDPOINT || "https://pokeapi.co/api/v2/pokemon?limit=905",
});
