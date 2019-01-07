/**
 * AdminPanelPage - thunx
 */

import axios from 'axios';
import {
  setPostRequest,
  setPostError,
  setPostSuccess,
  getPhotosRequest,
  getPhotosError,
  getPhotosSuccess,
} from './actions';
import { API } from '../../config/api';
import { unsplashConfig } from '../../config/unsplash';
import toastr from '../../helpers/toastr';

export const setPost = () => async dispatch => {
  await dispatch(setPostRequest());
  try {
    const respons = await axios.get(`${API.URL}/${API.POSTS}`);
    await dispatch(setPostSuccess(respons.data.payload));
  } catch (error) {
    await toastr('error', error.message);
    await dispatch(setPostError(error));
  }
};

export const getPhoto = (str = 'pizza') => async dispatch => {
  const page = 1;
  const query = str;
  const requestUrl = `${API.URL_UNSPLASH}/${
    API.PHOTO
  }?page=${page}&query=${query}`;

  axios.defaults.headers.common.Authorization = `Client-ID ${
    unsplashConfig.ACCESS
  }`;

  await dispatch(getPhotosRequest());
  try {
    const respons = await axios.get(requestUrl);
    await dispatch(getPhotosSuccess(respons.data.results));
  } catch (error) {
    await toastr('error', error.message);
    await dispatch(getPhotosError(error));
  }
};
