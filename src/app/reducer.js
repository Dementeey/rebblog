/**
 * root reducer
 */

import { combineReducers } from 'redux';
import homePageReducer from './containers/Home/reducer';
import postReducer from './containers/Post/reducer';

const reducer = combineReducers({
  homePage: homePageReducer,
  post: postReducer,
});

export default reducer;
