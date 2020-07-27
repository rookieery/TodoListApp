import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import Main from './components/MainComponent'
import { composeWithDevTools } from 'redux-devtools-extension';
import './sass/index.scss';

const store = createStore(todoApp, composeWithDevTools(
  applyMiddleware()
));

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)
