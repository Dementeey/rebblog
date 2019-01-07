/**
 * AdminPanelPage - actions
 */

import {
  SET_POST_ERROR,
  SET_POST_REQUEST,
  SET_POST_SUCCESS,
  GET_PHOTO_ERROR,
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS,
  SET_CURRENT_PHOTO,
} from './constants';

export const setPostRequest = data => ({
  type: SET_POST_REQUEST,
  payload: data,
});

export const setPostSuccess = data => ({
  type: SET_POST_SUCCESS,
  payload: data,
});

export const setPostError = data => ({
  type: SET_POST_ERROR,
  payload: data,
});

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
