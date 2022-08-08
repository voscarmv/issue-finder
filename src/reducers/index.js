import { combineReducers } from 'redux';
import {
  GET_ISSUES_REQUEST,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAIL,
} from "../constants/issueConstants.js";
// NOTE: Split label and issue reducers in separate files
import {
  GET_LABELS_REQUEST,
  GET_LABELS_SUCCESS,
  GET_LABELS_FAIL,
} from "../constants/labelConstants.js";

function issue(state = {}, action) {
  switch (action.type) {
    case GET_ISSUES_REQUEST:
      return {
        ...state,
        loading:true,
      };
    case GET_ISSUES_SUCCESS:
      return {
        loading:false,
        labelslist: [...new Set(action.payload)]
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

function label(state = {}, action){
  switch (action.type) {
    case GET_LABELS_REQUEST:
      return {
        ...state,
        loading:true,
      };
    case GET_LABELS_SUCCESS:
      return {
        loading:false,
        reposlist:action.payload
      };
    case GET_LABELS_FAIL:
      return {
        loading:false,
        error:action.error
      };
  default:
    return state;
  }
};

export default combineReducers({
  issueStore: issue,
  labelStore: label
});