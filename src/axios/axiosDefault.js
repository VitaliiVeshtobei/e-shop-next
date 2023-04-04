import axios from "axios";

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

export const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
