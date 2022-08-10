import * as api from "../api";
import * as issue from "../constants/issueConstants"
import * as label from "../constants/labelConstants"

export const getIssues = (org, repo, label) => async (dispatch) => {
  dispatch({
    type: issue.GET_ISSUES_REQUEST
  });
  try {
    const { data } = await api.fetchIssues(org, repo, label);
    console.log(data);
    dispatch({
      type: issue.GET_ISSUES_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: issue.GET_ISSUES_FAIL,
      error: e.message,
    });
  }
};

export const getLabels = () => async (dispatch) => {
  dispatch({
    type: label.GET_LABELS_REQUEST,
  });
  try {
    const data = await api.rawLabels();
    dispatch({
      type: label.GET_LABELS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: label.GET_LABELS_FAIL,
      error: e.message,
    });
  }
};
