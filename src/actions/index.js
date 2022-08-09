// import fetch from 'node-fetch';
import * as api from "../api";
import types from "./types";

export const getIssues = (org, repo, label) => async (dispatch) => {
  dispatch({
    type: types.GET_ISSUES_LOADING
  });
  try {
    const { data } = await api.fetchIssues(org, repo, label);
    console.log(data);
    dispatch({
      type: types.GET_ISSUES_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: types.GET_ISSUES_ERROR,
      error: e.message,
    });
  }
};

export const getLabels = () => async (dispatch) => {
  dispatch({
    type: types.GET_LABELS_LOADING,
  });
  try {
    const data = await api.rawLabels();
    dispatch({
      type: types.GET_LABELS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: types.GET_LABELS_ERROR,
      error: e.message,
    });
  }
};
