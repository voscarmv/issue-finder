import {
  ADD_TO_SELECTED_LABELS,
  REMOVE_FROM_SELECTED_LABELS,
  EMPTY_SELECTED_LABELS
} from '../constants/selectedLabelsConstants';

export default function selectLabels(state = [], action) {
  const selectedlabel = action.payload;
  const isSelectedIssueExist = state.find((i) => i === selectedlabel);
  switch (action.type) {
    case ADD_TO_SELECTED_LABELS:
      if (isSelectedIssueExist) {
        return state;
      } else {
        return [...state, selectedlabel];
      }
    case REMOVE_FROM_SELECTED_LABELS:
      return state.filter((i) => i !== action.payload);
    case EMPTY_SELECTED_LABELS:
      return [];
    default:
      return state;
  }
}
