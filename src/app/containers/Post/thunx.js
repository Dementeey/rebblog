/**
 * Post - thunx
 */

import axios from 'axios';
import { getPostRequest, getPostError, getPostSuccess } from './actions';
import { API } from '../../../config/api';
import toastr from '../../../helpers/toastr';

export const fetchPost = id => async dispatch => {
  await dispatch(getPostRequest());
  try {
    const response = await axios.get(`${API.POST}/${id}`);

    await dispatch(getPostSuccess(response.data.payload));
  } catch ({ message }) {
    await toastr('error', message);
    await dispatch(getPostError(message));
  }
};
