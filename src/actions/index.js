import fetch from 'node-fetch';
import types from './types';

export const create = (record) => ({
  type: types.CREATE,
  table: record.table,
  data: record.data,
})

export const read = (record) => ({
  type: types.READ,
  table: record.table,
  id: record.id,
})

export const update = (record) => ({
  type: types.UPDATE,
  table: record.table,
  data: record.data,
  id: record.id,
})

export const deleter = (record) => ({
  type: types.DELETE,
  table: record.table,
  id: record.id,
})

export const list = (record) => ({
  type: types.LIST,
  table: record.table,
});

export const fetchIssues = data => async dispatch => {
  console.log(data);
  dispatch({
    type: 'LOADING',
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
      type: 'SUCCESS',
      payload: JSON.stringify(appointmentJSON),
    });
  } catch (e) {
    dispatch({
      type: 'ERROR',
      error: e.message,
    });
  }
};
