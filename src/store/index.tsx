import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../app/containers/App/reducer'
// import { StoreState } from './model'

interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

const store = createStore<StoreState>(
  reducer,
  {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  },
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
