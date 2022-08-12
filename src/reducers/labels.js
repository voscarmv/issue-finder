import {
  GET_LABELS_REQUEST,
  GET_LABELS_SUCCESS,
  GET_LABELS_FAIL,
} from "../constants/labelConstants.js";

export default function labels(state = {}, action) {
  switch (action.type) {
    case GET_LABELS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_LABELS_SUCCESS:
      return {
        loading: false,
        labelslist: [...new Set(action.payload)],
      };
    case GET_LABELS_FAIL:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
