/**
 * Post - thunx
 */

import axios from 'axios';
import { getPostRequest, getPostError, getPostSuccess } from './actions';
import { API } from '../../../config/api';
import toastr from '../../../helpers/toastr';

export const fetchPost = () => async dispatch => {
  await dispatch(getPostRequest());
  try {
    const respons = await axios.get(`${API.URL}/${API.POSTS}`);
    await dispatch(getPostSuccess(respons.data.payload));
  } catch (error) {
    await toastr('error', error.message);
    await dispatch(getPostError(error));
  }
};
