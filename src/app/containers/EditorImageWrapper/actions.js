/**
 * EditorImageWrapper - actions
 */

import {
  GET_PHOTO_ERROR,
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS,
  SET_CURRENT_PHOTO,
} from './constants';

export const getPhotosRequest = data => ({
  type: GET_PHOTO_REQUEST,
  payload: data,
});

export const getPhotosSuccess = data => ({
  type: GET_PHOTO_SUCCESS,
  payload: data,
});

export const getPhotosError = data => ({
  type: GET_PHOTO_ERROR,
  payload: data,
});

export const setCurrentPhoto = data => ({
  type: SET_CURRENT_PHOTO,
  payload: data,
});
