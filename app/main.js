import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import exercises from './exercises/ExerciseReducers'
import App from './App';

const logger = createLogger();
const defaultState = {
  exercises: [],
};

const store = createStore(exercises, defaultState, applyMiddleware(thunk, logger));

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
