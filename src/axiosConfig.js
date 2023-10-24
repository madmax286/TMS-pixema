import axios from "axios";

const instance = axios.create({
  // baseURL: "http://www.omdbapi.com",
  baseURL: "https://api.rawg.io/api",
});

export default instance;

export const apiKeyRawg = 'key=8975b9484fa84b44a2d31819352fcce3'
// const apiKey = '?apikey=c909af42'