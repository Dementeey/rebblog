/**
 * SignIn - reducer
 */

import { SIGN_IN_ERROR, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from './constants';

export const initialState = {
  loading: false,
  data: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
