/**
 * SignIn - thunx
 */

import axios from 'axios';
import { signInError, signInRequest, signInSuccess } from './actions';
import { API } from '../../../config/api';
import toastr from '../../../helpers/toastr';
import { setUserData } from '../../../helpers/userUtils';

export const getSignIn = body => async dispatch => {
  await dispatch(signInRequest());
  try {
    const response = await axios.post(API.SIGN, body);
    const { payload } = response.data;

    await setUserData(payload);
    await dispatch(signInSuccess(payload));
    await toastr('success', 'Sign Successfully!');
  } catch (error) {
    await toastr('error', error.message);
    await dispatch(signInError(error));
  }
};
