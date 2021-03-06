import React from 'react'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from 'app/configureStore'

const store = configureStore()

export default () => {
  return <Provider store={store}>
    <App />
  </Provider>
}
