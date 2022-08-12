import * as api from "../api";
import * as issue from "../constants/issueConstants"
import * as label from "../constants/labelConstants"
import * as repo from "../constants/reposConstants"

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

export const getLabels = (repos) => async (dispatch) => {
  console.log(`inside getLabels ${JSON.stringify(repos)}`);
  // dispatch({
  //   type: label.GET_LABELS_REQUEST,
  // });
  // try {
  //   const data = await api.rawLabels(repos);
  //   dispatch({
  //     type: label.GET_LABELS_SUCCESS,
  //     payload: data,
  //   });
  // } catch (e) {
  //   console.log(e.message);
  //   dispatch({
  //     type: label.GET_LABELS_FAIL,
  //     error: e.message,
  //   });
  // }
};

export const getRepos = () => async (dispatch) => {
  dispatch({
    type: repo.GET_REPOS_REQUEST
  });
  try {
    const { data } = await api.fetchRepos();
    dispatch({
      type: repo.GET_REPOS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: repo.GET_REPOS_FAIL,
      error: e.message,
    });
  }
};
