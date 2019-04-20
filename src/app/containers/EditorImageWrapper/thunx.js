/**
 * EditorImageWrapper - thunx
 */

import axios from 'axios';
import { getPhotosRequest, getPhotosError, getPhotosSuccess } from './actions';
import { API } from '../../../config/api';
import { unsplashConfig } from '../../../config/unsplash';
import toastr from '../../../helpers/toastr';

const PER_PAGE = 20;

export const getPhoto = (
  query = 'italy',
  page = 3,
  orientation = ''
) => async dispatch => {
  const requestUrl = `${API.UNSPLASH_URL}${
    API.UNSPLASH_PHOTO
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
