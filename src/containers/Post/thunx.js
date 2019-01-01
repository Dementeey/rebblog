/**
 * Post thunx
 */

import { getPostRequest, getPostError, getPostSuccess } from './actions';
import { API } from '../../config/api';

export const fetchPost = id => dispatch => {
  dispatch(getPostRequest());
  return fetch(`${API.URL}/${API.POSTS}/${id}`)
    .then(response => response.json())
    .then(response => dispatch(getPostSuccess(response)))
    .catch(error => dispatch(getPostError(error)));
};
