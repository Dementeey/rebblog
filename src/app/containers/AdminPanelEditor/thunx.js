/**
 * AdminPanelPage - thunx
 */

import axios from 'axios';
import { setPostRequest, setPostError, setPostSuccess } from './actions';
import { API } from '../../../config/api';
import toastr from '../../../helpers/toastr';

export const setPost = body => async dispatch => {
  await dispatch(setPostRequest());
  try {
    const response = await axios.post(`${API.POSTS}`, {
      body,
    });
    await dispatch(setPostSuccess(response.data.payload));
  } catch (error) {
    await toastr('error', error.message);
    await dispatch(setPostError(error));
  }
};
