import {
  GET_LABELS_REQUEST,
  GET_LABELS_SUCCESS,
  GET_LABELS_FAIL,
  TOGGLE_MENU
} from '../constants/labelConstants.js';

const initialState = {
  menu: 1
};

export default function labels(state = initialState, action) {
  switch (action.type) {
    case GET_LABELS_REQUEST:
      return {
        ...state,
        loading: true,
        loadingPercentage: action.loadingPercentage
      };
    case GET_LABELS_SUCCESS:
      return {
        loading: false,
        menu: state.menu,
        labelslist: [...new Set(action.payload)]
      };
    case GET_LABELS_FAIL:
      return {
        loading: false,
        menu: state.menu,
        error: action.error
      };
    case TOGGLE_MENU:
      return {
        ...state,
        menu: action.menu
      };
    default:
      return state;
  }
}
