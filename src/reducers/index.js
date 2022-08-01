import { combineReducers } from 'redux';

const initialState = null;

function response(state = initialState, action) {
  switch (action.type) {
    case 'LOADING':
      return 'Loading...';
    case 'SUCCESS':
      return action.payload;
    case 'ERROR':
      return action.error;
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  response
});

export default rootReducer;