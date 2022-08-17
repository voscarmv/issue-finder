import {
  ADD_TO_SELECT_ISSUES,
  REMOVE_FROM_SELECT_ISSUES
} from '../constants/selectIssuesConstants';

export default function selectIssues(state = [], action) {
  const selectedIssue = action.payload;
  const isSelectedIssueExist = state.find((i) => i === selectedIssue);
  switch (action.type) {
    case ADD_TO_SELECT_ISSUES:
      if (isSelectedIssueExist) {
        return state;
      } else {
        return [...state, selectedIssue];
      }
    case REMOVE_FROM_SELECT_ISSUES:
      return state.filter((i) => i !== action.payload);
    default:
      return state;
  }
}
