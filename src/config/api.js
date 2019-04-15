import axios from 'axios';

export const API = {
  URL: process.env.API_HOST || 'http://localhost:9000',
  POSTS: 'api/posts/',
  URL_UNSPLASH: 'https://api.unsplash.com',
  PHOTO: '/search/photos',
};

const accessToken = localStorage.getItem('accessToken') || '1234';
const refreshToken = localStorage.getItem('refreshToken') || '1234';

axios.defaults.baseURL = API.URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
axios.defaults.headers.common.refresh_token = `Bearer ${refreshToken}`;
