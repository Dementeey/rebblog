import axios from 'axios';

export const API = {
  URL: process.env.REACT_APP_API_HOST || 'http://localhost:9000',
  POSTS: 'api/posts/',
  SIGN: 'api/sign/',
  UNSPLASH_URL:
    process.env.REACT_APP_API_UNSPLASH || 'https://api.unsplash.com',
  UNSPLASH_PHOTO: '/search/photos',
};

const user = JSON.parse(localStorage.getItem('userData'));

if (user) {
  const { accessToken, refreshToken } = user;
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  axios.defaults.headers.common.refresh_token = `Bearer ${refreshToken}`;
}

axios.defaults.baseURL = API.URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
