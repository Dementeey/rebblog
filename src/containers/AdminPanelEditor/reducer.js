/**
 * AdminPanelPage - reducer
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

export const initialState = {
  data: [],
  model: {},
  error: '',
  loading: false,

  photosUnsplash: {
    loading: false,
    data: [],
    paginationUrls: [],
    currentPhoto: {},
    error: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_REQUEST:
      return {
        ...state,
        model: action.payload,
        loading: true,
      };

    case SET_POST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case SET_POST_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case GET_PHOTO_REQUEST:
      return {
        ...state,
        photosUnsplash: {
          ...state.photosUnsplash,
          loading: true,
        },
      };

    case GET_PHOTO_SUCCESS:
      return {
        ...state,
        photosUnsplash: {
          ...state.photosUnsplash,
          paginationUrls: action.payload.headers.link.split(','),
          data: action.payload.data.results,
          loading: false,
        },
      };

    case GET_PHOTO_ERROR:
      return {
        ...state,
        photosUnsplash: {
          ...state.photosUnsplash,
          error: action.payload.error,
          loading: false,
        },
      };

    case SET_CURRENT_PHOTO:
      return {
        ...state,
        photosUnsplash: {
          ...state.photosUnsplash,
          currentPhoto: action.payload,
        },
      };

    default:
      return state;
  }
};
