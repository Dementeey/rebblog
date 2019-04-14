import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
// import history from './helpers/history'
import 'toastr/build/toastr.min.css'
import App from './app'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)