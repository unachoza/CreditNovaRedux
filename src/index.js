import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import FetchReports from './redux/reducers/FetchReports'

const logger = createLogger();
const store = createStore(FetchReports, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
