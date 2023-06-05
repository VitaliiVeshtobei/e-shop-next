import axios from 'axios';
import { store } from '@/redux/store';
import { setTokenAccess, setTokenRefresh } from '@/redux/user/slice';

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;
// const backUrl = process.env.BACKEND_URL;
const backUrlProd = process.env.BACKEND_URL_PROD;
const backUrlDev = process.env.BACKEND_URL_DEV;

export const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export const instanceNew = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? process.env.BACKEND_URL_DEV : process.env.BACKEND_URL_PROD,
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

instanceNew.interceptors.response.use(
  (config) => config,
  async (error) => {
    if (error.response.status === 401) {
      const { refreshToken } = JSON.parse(localStorage.getItem('persist:user'));

      try {
        const { data } = await instanceNew.post('api/user/refresh', {
          refreshToken: JSON.parse(refreshToken),
        });

        const { dispatch } = store;

        dispatch(setTokenAccess(data.accessToken));
        dispatch(setTokenRefresh(data.refreshToken));

        error.config.headers.Authorization = `Bearer ${data.accessToken}`;
        setAuthHeader(data.accessToken);

        return instanceNew(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
