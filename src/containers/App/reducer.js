/**
 * root reducer
 */

import { combineReducers } from 'redux';
import homePageReducer from '../Home/reducer';
import postReducer from '../Post/reducer';

const reducer = combineReducers({
  homePage: homePageReducer,
  post: postReducer,
});

export default reducer;
