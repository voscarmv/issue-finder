import {
  GET_GITHUBAUTHKEY_REQUEST,
  GET_GITHUBAUTHKEY_SUCCESS,
  GET_GITHUBAUTHKEY_FAIL
} from '../constants/githubAuthConstants';

export default function githubauth(state = {}, action) {
  switch (action.type) {
    case GET_GITHUBAUTHKEY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_GITHUBAUTHKEY_SUCCESS:
      return {
        loading: false,
        data: action.payload.data
      };
    case GET_GITHUBAUTHKEY_FAIL:
      return {
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
