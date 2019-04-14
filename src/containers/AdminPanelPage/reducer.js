/**
 * HAdminPanelPage - reducer
 */

import {
  SET_POST_ERROR,
  SET_POST_REQUEST,
  SET_POST_SUCCESS,
} from './constants';

export const initialState = {
  data: [],
  model: {},
  error: '',
  loading: false,
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

    default:
      return state;
  }
};
