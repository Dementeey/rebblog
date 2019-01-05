/**
 * Post thunx
 */

import axios from 'axios';
import { getPostsRequest, getPostsError, getPostsSuccess } from './actions';
import { API } from '../../config/api';

export const fetchPosts = () => dispatch => {
  dispatch(getPostsRequest());
  return axios
    .get(`${API.URL}/${API.POSTS}`)
    .then(({ data }) => dispatch(getPostsSuccess(data.payload)))
    .catch(error => dispatch(getPostsError(error)));
};
