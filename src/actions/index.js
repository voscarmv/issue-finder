// import fetch from 'node-fetch';
import types from './types';
import * as api from '../api'

export const getIssues = (org,repo,label) => async dispatch => {
  dispatch({
    type: types.LOADING,
  });
  try {
    const {data} = await api.fetchIssues(org,repo,label)
    console.log(data);
    dispatch({
      type: types.SUCCESS,
      payload: JSON.stringify(data),
    });
  } catch (e) {
    dispatch({
      type: types.ERROR,
      error: e.message,
    });
  }
};
