import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.omdbapi.com",
  // baseURL: "https://api.rawg.io/api",

});

export default instance;
