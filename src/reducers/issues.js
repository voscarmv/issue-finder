import {
  GET_ISSUES_REQUEST,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAIL,
  EMPTY_ISSUES_LIST,
  SET_LANGUAGE
} from '../constants/issueConstants.js';

const initialState = {
  language: 'All'
};
export default function issues(state = initialState, action) {
  switch (action.type) {
    case GET_ISSUES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_ISSUES_SUCCESS:
      if (action.payload.length === 0) return { ...state, loading: false };
      if (state.issuesList) {
        return {
          loading: false,
          language: state.language,
          issuesList: [...state.issuesList, action.payload]
        };
      } else {
        return {
          loading: false,
          language: state.language,
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
        language: state.language,
        issuesList: []
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      };
    default:
      return state;
  }
}
