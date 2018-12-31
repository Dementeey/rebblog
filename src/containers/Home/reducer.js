/**
 * Home reducer
 */

import {
  GET_POSTS_ERROR,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from './constants';

export const initialState = {
  data: null,
  error: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case GET_POSTS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
};
