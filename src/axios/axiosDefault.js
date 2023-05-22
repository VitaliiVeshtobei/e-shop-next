import axios from 'axios';

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;
// const backUrl = process.env.BACKEND_URL;
const backUrlProd = process.env.BACKEND_URL_PROD;

export const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export const instanceNew = axios.create({
  baseURL: backUrlProd,
  // headers: {
  //   Authorization: `Bearer ${apiKey}`,
  // },
});

export const setAuthHeader = (token) => {
  instanceNew.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instanceNew.defaults.headers.common.Authorization = '';
};
