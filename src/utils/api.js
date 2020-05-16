import axios from 'axios';

import {getAccessToken, logout} from './security';

export const API_URL = 'http://192.168.0.252:3333/';

const fetch = () => {
  const defaultOptions = {
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async response => {
    const token = await getAccessToken();
    response.headers.Authorization = token ? `Bearer ${token}` : '';
    return response;
  });

  instance.interceptors.response.use(
    async response => response,
    async error => {
      console.log(error);
      const {status} = error.response;
      if (status && status === 401) await logout();
      return error;
    },
  );

  return instance;
};

export default fetch();
