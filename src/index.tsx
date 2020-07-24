import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import Main from './components/MainComponent'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('root')
)
