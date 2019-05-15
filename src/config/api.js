import axios from 'axios';
import { getUserData } from '../helpers/userUtils';

export const API = {
  URL: `${process.env.REACT_APP_API_HOST || 'http://localhost'}:${process.env
    .REACT_APP_API_PORT || 9000}`,
  POSTS: '/api/posts',
  POST: '/api/post',
  SIGN: '/api/sign',
  UNSPLASH_URL:
    process.env.REACT_APP_API_UNSPLASH || 'https://api.unsplash.com',
  UNSPLASH_PHOTO: '/search/photos',
};

const user = getUserData();

if (user) {
  const { accessToken, refreshToken } = user;
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  axios.defaults.headers.common.refresh_token = `Bearer ${refreshToken}`;
}

axios.defaults.baseURL = API.URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
