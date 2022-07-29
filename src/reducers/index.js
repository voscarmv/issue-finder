import { combineReducers } from 'redux';
import alertReducer from './alert';
import authReducer from './auth';
import subjectDisplayReducer from './subjectdisplay';
import fetchReducer from './rfetch';

export default combineReducers({
  alertState: alertReducer,
  authState: authReducer,
  subjectDisplayState: subjectDisplayReducer,
  fetchState: fetchReducer,
});
