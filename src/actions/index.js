import types from './types';
import sieveIssues from './api';

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
    // As an example
    const getAppointment = sieveIssues('org/repo', 'filters');
    
    console.log('This is the RESULT: ', getAppointment);

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
