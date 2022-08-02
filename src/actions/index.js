import fetch from 'node-fetch';
import types from './types';

export const fetchIssues = data => async dispatch => {
  console.log(data);
  dispatch({
    type: types.LOADING,
  });
  try {
    const getAppointment = await fetch(
      'https://api.github.com/repos/chatwoot/chatwoot/issues',
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      },
    );

    if (getAppointment.status !== 200) {
      throw getAppointment.statusText;
    }

    const appointmentJSON = await getAppointment.json();
    dispatch({
      type: types.SUCCESS,
      payload: JSON.stringify(appointmentJSON),
    });
  } catch (e) {
    dispatch({
      type: types.ERROR,
      error: e.message,
    });
  }
};
