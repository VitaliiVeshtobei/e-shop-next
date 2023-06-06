import axios from 'axios';

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

export const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export const instanceNew = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? process.env.BACKEND_URL_DEV : process.env.BACKEND_URL_PROD,
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

        localStorage.setItem(
          'persist:user',
          JSON.stringify({ accessToken: data.accessToken, refreshToken: data.refreshToken })
        );

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
