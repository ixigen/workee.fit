import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import workouts from './workouts/workoutReducers'
import query from 'search/searchReducers';

const logger = createLogger();
const history = createHistory();

const defaultState = {
  workouts: [],
  query: 'ALL',
};

const rootReducer = combineReducers({
  workouts,
  query,
  router: routerReducer
});

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk, logger, routerMiddleware(history)));

export {history};
export default store;