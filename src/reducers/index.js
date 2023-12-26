import { combineReducers } from 'redux';
import issues from './issues';
import labels from './labels';
import repos from './repos';
import selectedLabels from './selectedLabels';
import githubauth from './githubauth';

export default combineReducers({
  issuesStore: issues,
  labelsStore: labels,
  reposStore: repos,
  selectedLabelsStore: selectedLabels,
  githubauthStore: githubauth
});
