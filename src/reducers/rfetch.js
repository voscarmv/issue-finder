import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  DISMISS,
} from '../actions/action-types';

const initialState = {
  content: '',
  type: '',
  show: false,
  data: [],
  error: null,
};

const fetchReducer = (state = initialState, action) => {
  if (action.type === FETCH_REQUEST) {
    return {
      content: action.message.content,
      type: action.message.type,
      show: action.message.show,
      data: [],
      error: null,
    };
  } if (action.type === FETCH_SUCCESS) {
    return {
      content: action.message.content,
      type: action.message.type,
      show: action.message.show,
      data: action.payload,
      error: null,
    };
  } if (action.type === FETCH_ERROR) {
    return {
      content: action.message.content,
      type: action.message.type,
      show: action.message.show,
      data: action.payload,
      error: action.payload,
    };
  } if (action.type === DISMISS) {
    return {
      content: '',
      type: '',
      show: false,
      data: [],
      error: null,
    };
  }
  return state;
};

export default fetchReducer;
