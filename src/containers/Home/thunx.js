/**
 * Post thunx
 */

import axios from 'axios';
import { getPostsRequest, getPostsError, getPostsSuccess } from './actions';
import { API } from '../../config/api';
import toastr from '../../helpers/toastr';

export const fetchPosts = () => dispatch => {
  dispatch(getPostsRequest());
  return axios
    .get(`${API.URL}/${API.POSTS}`)
    .then(({ data }) => {
      return dispatch(getPostsSuccess(data.payload));
    })
    .catch(error => {
      toastr('error', error.message);
      return dispatch(getPostsError(error));
    });
};
