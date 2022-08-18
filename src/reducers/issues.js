import {
  GET_ISSUES_REQUEST,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAIL,
  EMPTY_ISSUES_LIST
} from '../constants/issueConstants.js';

export default function issues(state = {}, action) {
  switch (action.type) {
    case GET_ISSUES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_ISSUES_SUCCESS:
      if (action.payload.length === 0) return state;
      if (state.issuesList) {
        return {
          loading: false,
          issuesList: [...state.issuesList, action.payload]
        };
      } else {
        return {
          loading: false,
          issuesList: [action.payload]
        };
      }
    case GET_ISSUES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case EMPTY_ISSUES_LIST:
      return {
        loading: false,
        issuesList: []
      };
    default:
      return state;
  }
}
