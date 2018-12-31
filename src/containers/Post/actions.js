/**
 * Post actions
 */

import {
  GET_POST_ERROR,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
} from './constants';

export const getPostRequest = data => ({
  type: GET_POST_REQUEST,
  payload: data,
});

export const getPostSuccess = data => ({
  type: GET_POST_SUCCESS,
  payload: data,
});

export const getPostError = data => ({
  type: GET_POST_ERROR,
  payload: data,
});
