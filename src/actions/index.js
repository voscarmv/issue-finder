import * as api from '../api';
import * as issue from '../constants/issueConstants';
import * as label from '../constants/labelConstants';
import * as repo from '../constants/reposConstants';
import {
  ADD_TO_SELECTED_LABELS,
  REMOVE_FROM_SELECTED_LABELS,
  EMPTY_SELECTED_LABELS
} from '../constants/selectedLabelsConstants';

import {
  GET_GITHUBAUTHKEY_REQUEST,
  GET_GITHUBAUTHKEY_SUCCESS,
  GET_GITHUBAUTHKEY_FAIL
} from '../constants/githubAuthConstants';

export const getIssues = (org, repo, label, access_token) => async (dispatch) => {
  dispatch({
    type: issue.GET_ISSUES_REQUEST
  });
  try {
    const { data } = await api.fetchIssues(org, repo, label, access_token);
    dispatch({
      type: issue.GET_ISSUES_SUCCESS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: issue.GET_ISSUES_FAIL,
      error: e.message
    });
  }
};

export const getGithubAuthKey = (code) => async (dispatch) => {
  dispatch({
    type: GET_GITHUBAUTHKEY_REQUEST
  });
  try {
    const data = await api.getGitHubAuthKey(code);
    dispatch({
      type: GET_GITHUBAUTHKEY_SUCCESS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: GET_GITHUBAUTHKEY_FAIL,
      error: e.message
    });
  }
};

export const toggleLabelList = (menu) => (dispatch) => {
  if (menu === 1) menu = 2;
  else menu = 1;
  dispatch({
    type: label.TOGGLE_MENU,
    menu
  });
};

export const epmtyIssuesList = () => (dispatch) => {
  dispatch({
    type: issue.EMPTY_ISSUES_LIST
  });
};

export const epmtySelectedLabel = () => (dispatch) => {
  dispatch({
    type: EMPTY_SELECTED_LABELS
  });
};

export const setLanguage = (language) => (dispatch) => {
  dispatch({
    type: issue.SET_LANGUAGE,
    language
  });
};

export const rawLabels = async (repos, dispatch, access_token) => {
  let rawdata = [];
  let labels;
  for (let i = 0; i < repos.length; i++) {
    const item = repos[i];
    try {
      labels = await api.fetchLabels(item.org, item.repo, access_token);
    } catch (e) {
      console.error(e);
    }
    for (let j = 0; j < labels.data.length; j++) {
      const label = labels.data[j];
      rawdata.push(label.name);
    }
    dispatch({
      type: label.GET_LABELS_REQUEST,
      loadingPercentage: (i * 100) / repos.length
    });
  }
  return rawdata;
};

export const getLabels = (repos, language, access_token) => async (dispatch, getState) => {
  if (repos === undefined) return;
  dispatch({
    type: label.GET_LABELS_REQUEST,
    loadingPercentage: 0
  });
  try {
    // get date for list of labels, saved in browser's local strorage
    const localStorageObj = JSON.parse(localStorage.getItem(language + '_labelslist'));
    const localDataDate = localStorageObj?.date;
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = (mm + dd + yyyy).toString();
    // if date, when data was saved, is more than a day, clear it.
    if (localDataDate !== today) {
      localStorage.removeItem(language + '_labelslist');
    }

    // get label list from local storage
    const localData = localStorageObj?.labels;
    let data = '';
    if (localData) data = localData;
    else data = await rawLabels(repos, dispatch, access_token); // if label list is not present in local storage than get fresh list of labels.
    dispatch({
      type: label.GET_LABELS_SUCCESS,
      payload: data
    });
    localStorage.setItem(
      language + '_labelslist',
      JSON.stringify({ language: language, date: today, labels: getState().labelsStore.labelslist })
    );
  } catch (e) {
    console.error(`getlabels error ${e.message}`);
    dispatch({
      type: label.GET_LABELS_FAIL,
      error: e.message
    });
  }
};

export const getRepos = () => async (dispatch) => {
  dispatch({
    type: repo.GET_REPOS_REQUEST
  });
  try {
    const { data } = await api.fetchRepos();
    dispatch({
      type: repo.GET_REPOS_SUCCESS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: repo.GET_REPOS_FAIL,
      error: e.message
    });
  }
};

export const addToSelectedLabels = (labels) => (dispatch) => {
  dispatch({
    type: ADD_TO_SELECTED_LABELS,
    payload: labels
  });
};

export const removeFromSelectLabels = (labels) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_SELECTED_LABELS,
    payload: labels
  });
};
