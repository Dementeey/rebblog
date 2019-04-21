/**
 * SignIn - actions
 */

import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from './constants';

export const signInRequest = data => ({
  type: SIGN_IN_REQUEST,
  payload: data,
});

export const signInSuccess = data => ({
  type: SIGN_IN_SUCCESS,
  payload: data,
});

export const signInError = data => ({
  type: SIGN_IN_ERROR,
  payload: data,
});
