import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/AppComponent'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    < />
  </Provider>,
  document.getElementById('root')
)
