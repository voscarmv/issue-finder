import {
  GET_REPOS_REQUEST,
  GET_REPOS_SUCCESS,
  GET_REPOS_FAIL
} from '../constants/reposConstants.js';

export default function repos(state = {}, action) {
  switch (action.type) {
    case GET_REPOS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_REPOS_SUCCESS:
      return {
        loading: false,
        reposlist: action.payload
      };
    case GET_REPOS_FAIL:
      return {
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
