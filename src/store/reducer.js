/**
 * root reducer
 */

import { combineReducers } from 'redux'
import homePageReducer from '../Home/reducer'
import postReducer from '../Post/reducer'
import adminPanelReducer from '../AdminPanelPage/reducer'
import adminPanelEditorReducer from '../AdminPanelEditor/reducer'

const reducer = combineReducers({
  homePage: homePageReducer,
  post: postReducer,
  adminPanel: adminPanelReducer,
  adminPanelEditor: adminPanelEditorReducer,
})

export default reducer
