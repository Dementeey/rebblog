/**
 * EditorImageWrapper - reducer
 */

import {
  GET_PHOTO_ERROR,
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS,
  SET_CURRENT_PHOTO,
} from './constants';

export const initialState = {
  loading: false,
  data: [],
  paginationUrls: [],
  currentPhoto: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_PHOTO_SUCCESS:
      return {
        ...state,
        paginationUrls: action.payload.headers.link.split(','),
        data: action.payload.data.results,
        loading: false,
      };

    case GET_PHOTO_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case SET_CURRENT_PHOTO:
      return {
        ...state,
        currentPhoto: action.payload,
      };

    default:
      return state;
  }
};
