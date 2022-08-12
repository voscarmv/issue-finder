import { combineReducers } from 'redux';
import issues from './issues';
import labels from './labels';
import repos from './repos';
import selectIssues from './selectIssues';

export default combineReducers({
  issuesStore: issues,
  labelsStore: labels,
  reposStore: repos,
  selectIssuesStore:selectIssues
});