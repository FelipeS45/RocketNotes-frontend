import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-projeto-1-rocketseat.onrender.com"
})