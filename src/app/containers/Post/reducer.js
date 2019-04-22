/**
 * Post reducer
 */

import {
  GET_POST_ERROR,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
} from './constants';

export const initialState = {
  data: {},
  error: '',
  loading: false,
  getPostId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_REQUEST:
      return {
        ...state,
        getPostId: action.payload,
        loading: true,
      };

    case GET_POST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case GET_POST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
