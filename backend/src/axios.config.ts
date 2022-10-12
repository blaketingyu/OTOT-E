import axios from "axios";

export const axiosObj = axios.create({
  baseURL: process.env.API_ENDPOINT || "mongodb://127.0.0.1:27017",
});

/*
export const pokemonAxios = axios.create({
  baseURL:
    process.env.POKEMON_ENDPOINT ||
    "https://pokeapi.co/api/v2/pokemon?limit=905",
});
*/
