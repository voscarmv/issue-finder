import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combineReducers from '../reducers/index';

const store = configureStore(
  {reducer: combineReducers},
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk,
    ),
  ),
);

export default store;
