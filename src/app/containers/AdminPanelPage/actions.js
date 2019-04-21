/**
 * AdminPanelPage - actions
 */

import {
  SET_POST_ERROR,
  SET_POST_REQUEST,
  SET_POST_SUCCESS,
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
