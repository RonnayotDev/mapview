import axios from "axios";

const API_URL = "http://localhost:3000";

const client = axios.create({
  baseURL: API_URL,
});

const api = {
  async get(path) {
    const { data } = await client.get(path);
    return data;
  },
  async post(path) {
    const { data } = await client.post(path, body);
    return data;
  },
};

export default api;
