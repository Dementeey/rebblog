/**
 * Post - thunx
 */

import axios from 'axios';
import { getPostRequest, getPostError, getPostSuccess } from './actions';
import { API } from '../../config/api';
import toastr from '../../helpers/toastr';

// export const fetchPost = () => dispatch => {
//   dispatch(getPostRequest());
//   return axios // TODO --- test using generators
//     .get(`${API.URL}/${API.POSTS}`)
//     .then(({ data }) => {
//       return dispatch(getPostSuccess(data.payload));
//     })
//     .catch(error => {
//       toastr('error', error.message);
//       return dispatch(getPostError(error));
//     });
// };
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
