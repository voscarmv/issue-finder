import { combineReducers } from 'redux';
import issues from './issues';
import labels from './labels';


export default combineReducers({
  issuesStore: issues,
  labelsStore: labels
});