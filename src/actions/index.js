// import fetch from 'node-fetch';
import * as api from "../api";
import {
  GET_ISSUES_REQUEST,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAIL,
} from "../constants/issueConstants.js";

export const getIssues = (org, repo, label) => async (dispatch) => {
  dispatch({
    type: GET_ISSUES_REQUEST,
  });
  try {
    const { data } = await api.fetchIssues(org, repo, label);
    console.log(data);
    dispatch({
      type: GET_ISSUES_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: GET_ISSUES_FAIL,
      error: e.message,
    });
  }
};
