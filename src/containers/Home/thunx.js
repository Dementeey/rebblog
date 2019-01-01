/**
 * Post thunx
 */

import { getPostsRequest, getPostsError, getPostsSuccess } from './actions';
import { API } from '../../config/api';

export const fetchPosts = () => dispatch => {
  dispatch(getPostsRequest());
  return fetch(`${API.URL}/${API.POSTS}`)
    .then(response => response.json())
    .then(response => dispatch(getPostsSuccess(response)))
    .catch(error => dispatch(getPostsError(error)));
};
