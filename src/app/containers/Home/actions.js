/**
 * Home actions
 */

import {
  GET_POSTS_ERROR,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from './constants';

export const getPostsRequest = data => ({
  type: GET_POSTS_REQUEST,
  payload: data,
});

export const getPostsSuccess = data => ({
  type: GET_POSTS_SUCCESS,
  payload: data,
});

export const getPostsError = data => ({
  type: GET_POSTS_ERROR,
  payload: data,
});
