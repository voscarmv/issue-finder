import {
  GET_ISSUES_REQUEST,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAIL,
} from "../constants/issueConstants.js";

export default function issues(state = {}, action) {
    switch (action.type) {
      case GET_ISSUES_REQUEST:
        return {
          ...state,
          loading:true,
        };
      case GET_ISSUES_SUCCESS:
        return {
          loading:false,
          issuesList: action.payload
        };
      case GET_ISSUES_FAIL:
        return {
          loading:false,
          error:action.error
        };
    default:
      return state;
    }
  }