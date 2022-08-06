// import fetch from 'node-fetch';
import types from './types';
import * as api from '../api'

export const getIssues = (info) => async dispatch => {
  console.log(info);
  dispatch({
    type: types.LOADING,
  });
  try {
    const {data} = await api.fetchIssues('chatwoot','chatwoot','good first issue')
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
