import axios from "axios";

// BASE DA URL = http://vps56643.publiccloud.com.br:3333
// URL DA API =

const api = axios.create({
  baseURL: "/api",
});

export default api;
