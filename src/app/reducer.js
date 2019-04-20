/**
 * root reducer
 */

import { combineReducers } from 'redux';
import homePage from './containers/Home/reducer';
import post from './containers/Post/reducer';
import adminPanel from './containers/AdminPanelPage/reducer';
import adminPanelEditor from './containers/AdminPanelEditor/reducer';
import editorGetPhoto from './containers/EditorImageWrapper/reducer';

const reducer = combineReducers({
  post,
  homePage,
  adminPanel,
  adminPanelEditor,
  editorGetPhoto,
});

export default reducer;
