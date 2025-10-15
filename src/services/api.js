import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Porta do teu backend (krl)
});

export default api;
