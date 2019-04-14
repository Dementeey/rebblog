/**
 * AdminPanelPage - thunx
 */

import axios from 'axios';
import { setPostRequest, setPostError, setPostSuccess } from './actions';
import { API } from '../../../config/api';
import toastr from '../../../helpers/toastr';

export const setPost = () => async dispatch => {
  await dispatch(setPostRequest());
  try {
    const respons = await axios.get(`${API.URL}/${API.POSTS}`);
    await dispatch(setPostSuccess(respons.data.payload));
  } catch (error) {
    await toastr('error', error.message);
    await dispatch(setPostError(error));
  }
};
