/**
 * root reducer
 */

import { combineReducers } from 'redux';
import homePageReducer from './containers/Home/reducer';
import postReducer from './containers/Post/reducer';
import adminPanelReducer from './containers/AdminPanelPage/reducer';
import adminPanelEditorReducer from './containers/AdminPanelEditor/reducer';

const reducer = combineReducers({
  homePage: homePageReducer,
  post: postReducer,
  adminPanel: adminPanelReducer,
  adminPanelEditor: adminPanelEditorReducer,
});

export default reducer;
