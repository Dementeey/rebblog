/**
 * Home - thunx
 */

import axios from 'axios';
import { getPostsRequest, getPostsError, getPostsSuccess } from './actions';
import { API } from '../../../config/api';
import toastr from '../../../helpers/toastr';

export const fetchPosts = () => dispatch => {
  dispatch(getPostsRequest());
  return axios
    .get(API.POSTS)
    .then(({ data }) => dispatch(getPostsSuccess(data.payload)))
    .catch(error => {
      toastr('error', error.message);
      return dispatch(getPostsError(error));
    });
};
