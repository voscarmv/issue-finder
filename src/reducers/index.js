import { combineReducers } from 'redux';
import types from '../actions/types';

const initialState = null;

function response(state = initialState, action) {
  switch (action.type) {
    case types.LOADING:
      return 'Loading...';
    case types.SUCCESS:
      return action.payload;
    case types.ERROR:
      return action.error;
  default:
    return state;
  }
}

export default combineReducers({
  responseStore: response,
});;