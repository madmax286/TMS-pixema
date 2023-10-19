import axios from "axios";

const instance = axios.create({
  baseURL: "", // Replace with your API base URL
});

export default instance;


