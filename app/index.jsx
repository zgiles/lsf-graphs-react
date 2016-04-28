import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import App from './pages/App';
import { reducer } from './stores/reducer.jsx';

const loggerMiddleware = createLogger();

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
const ConnectedApp = connect()(App)

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
