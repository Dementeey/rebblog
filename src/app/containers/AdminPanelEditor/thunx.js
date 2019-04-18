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
import { API } from '../../../config/api';
import { unsplashConfig } from '../../../config/unsplash';
import toastr from '../../../helpers/toastr';

export const setPost = json => async dispatch => {
  await dispatch(setPostRequest());
  try {
    const response = await axios.post(`${API.POSTS}`, {
      body: { json },
    });
    await dispatch(setPostSuccess(response.data.payload));
  } catch (error) {
    await toastr('error', error.message);
    await dispatch(setPostError(error));
  }
};

const PER_PAGE = 20;

export const getPhoto = (
  query = '',
  page = 3,
  orientation = ''
) => async dispatch => {
  const requestUrl = `${API.URL_UNSPLASH}/${
    API.PHOTO
  }?page=${page}&query=${query}&per_page=${PER_PAGE}${orientation &&
    `&orientation=${orientation}
    `}`;

  axios.defaults.headers.common.Authorization = `Client-ID ${
    unsplashConfig.ACCESS
  }`;

  await dispatch(getPhotosRequest());
  try {
    const response = await axios.get(requestUrl);

    await dispatch(getPhotosSuccess(response));
  } catch (error) {
    await toastr('error', error.message);
    await dispatch(getPhotosError(error));
  }
};

export const getPhotoNext = nextUrl => async dispatch => {
  axios.defaults.headers.common.Authorization = `Client-ID ${
    unsplashConfig.ACCESS
  }`;

  await dispatch(getPhotosRequest());
  try {
    const response = await axios.get(nextUrl);

    await dispatch(getPhotosSuccess(response));
  } catch (error) {
    await toastr('error', error.message);
    await dispatch(getPhotosError(error));
  }
};

export const getPhotoPrev = prevUrl => async dispatch => {
  axios.defaults.headers.common.Authorization = `Client-ID ${
    unsplashConfig.ACCESS
  }`;

  await dispatch(getPhotosRequest());
  try {
    const response = await axios.get(prevUrl);

    await dispatch(getPhotosSuccess(response));
  } catch (error) {
    await toastr('error', error.message);
    await dispatch(getPhotosError(error));
  }
};
