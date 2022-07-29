import fetch from 'node-fetch';
import {
  DISMISS,
  DISMISS_SUBJECT,
  ALERT_MESSAGE,
  AUTH_KEY,
  AUTH_CLEAR,
  UPDATE_SUBJECT,
  DISMISS_APPOINTMENT,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './action-types';

export const alertMessage = payload => ({ type: ALERT_MESSAGE, payload });
export const authKey = payload => ({ type: AUTH_KEY, payload });
export const authClear = payload => ({ type: AUTH_CLEAR, payload });

export const fetchRequest = message => ({
  type: FETCH_REQUEST,
  message,
});

export const fetchSuccess = (data, message) => ({
  type: FETCH_SUCCESS,
  payload: data,
  message,
});

export const fetchError = (error, message) => ({
  type: FETCH_ERROR,
  payload: error,
  message,
});

export const fetchSignUpRequest = () => fetchRequest({
  content: 'Signing up...',
  type: 'info',
  show: true,
});
export const fetchSignUpSuccess = data => (fetchSuccess(data, {
  content: 'Signed up successfully!',
  type: 'success',
  show: true,
}));
export const fetchSignUpError = error => (fetchError(error, {
  content: `Failed to sign up: ${error}`,
  type: 'danger',
  show: true,
}));

export const dismissAlert = () => ({ type: DISMISS });

export const fetchLogInRequest = () => fetchRequest({
  content: 'Logging in...',
  type: 'info',
  show: true,
});
export const fetchLogInSuccess = data => (fetchSuccess(data, {
  content: 'Logged in successfully!',
  type: 'success',
  show: true,
}));
export const fetchLogInError = error => (fetchError(error, {
  content: `Failed to log in: ${error}`,
  type: 'danger',
  show: true,
}));

export const fetchLogIn = (data, history) => async dispatch => {
  dispatch(fetchLogInRequest());
  try {
    const jsonUpdate = data;
    const getLogin = await fetch(
      'http://localhost:3002/login',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(jsonUpdate),
      },
    );
    const loginJSON = await getLogin.json();

    const userID = loginJSON.id;
    const userEmail = loginJSON.email;
    const loginJWT = loginJSON.key;
    if (loginJWT === undefined) {
      throw new Error('Check your username and/or password.');
    }

    if (getLogin.status !== 200) {
      throw getLogin.statusText;
    }
    dispatch(authKey({ uid: userID, email: userEmail, key: loginJWT }));
    dispatch(fetchLogInSuccess(getLogin));
    history.push('/subjects');
  } catch (e) {
    dispatch(fetchLogInError(e));
  }
};

export const fetchSignUp = (data, history) => async dispatch => {
  dispatch(fetchSignUpRequest());
  try {
    const jsonUpdate = data;

    const getSignUp = await fetch(
      'http://localhost:3002/signup',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(jsonUpdate),
      },
    );
    const signupJSON = await getSignUp.json();

    if (signupJSON.exception) {
      throw signupJSON.exception;
    }
    dispatch(fetchSignUpSuccess(signupJSON));
    dispatch(fetchLogIn(
      {
        email: data.email,
        password: data.password,
      }, history,
    ));
  } catch (e) {
    dispatch(fetchSignUpError(e));
  }
};

export const fetchLogOutRequest = () => fetchRequest({
  content: 'Logging out...',
  type: 'info',
  show: true,
});
export const fetchLogOutSuccess = data => (fetchSuccess(data, {
  content: 'Logged out successfully!',
  type: 'success',
  show: true,
}));
export const fetchLogOutError = error => (fetchError(error, {
  content: `Failed to log out: ${error}`,
  type: 'danger',
  show: true,
}));

export const fetchLogOut = (data, history) => async dispatch => {
  dispatch(dismissAlert());
  dispatch(fetchLogOutRequest());
  try {
    const getLogout = await fetch(
      'http://localhost:3002/logout',
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: data,
        },
      },
    );
    if (getLogout.status !== 200) {
      throw getLogout.statusText;
    }
    dispatch(fetchLogOutSuccess());
    dispatch(authClear());
    history.push('/login');
  } catch (e) {
    dispatch(fetchLogOutError(e));
  }
};

export const dismissSubject = () => ({ type: DISMISS_SUBJECT });

export const fetchSubjectsRequest = () => fetchRequest({
  content: 'Fetching subjects...',
  type: 'info',
  show: false,
});
export const fetchSubjectsSuccess = data => (fetchSuccess(data, {
  content: 'Fetched subjects successfully!',
  type: 'success',
  show: false,
}));
export const fetchSubjectsError = error => (fetchError(error, {
  content: `Failed to fetch subjects: ${error}`,
  type: 'danger',
  show: false,
}));

export const fetchSubjects = data => async dispatch => {
  dispatch(fetchSubjectsRequest());
  try {
    const getSubjects = await fetch(
      'http://localhost:3002/subjects',
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: data,
        },
      },
    );
    if (getSubjects.status !== 200) {
      throw getSubjects.statusText;
    }

    const subj = await getSubjects.json();
    dispatch(fetchSubjectsSuccess(subj));
  } catch (e) {
    dispatch(fetchSubjectsError(e));
  }
};

export const updateSubject = subject => ({ type: UPDATE_SUBJECT, payload: subject });

export const postAppointmentRequest = () => fetchRequest({
  content: 'Creating appointment...',
  type: 'info',
  show: false,
});
export const postAppointmentSuccess = data => (fetchSuccess(data, {
  content: 'Created appointment successfully!',
  type: 'success',
  show: false,
}));
export const postAppointmentError = error => (fetchError(error, {
  content: `Failed to create appointment: ${error}`,
  type: 'danger',
  show: false,
}));

export const postAppointment = (data, key, history) => async dispatch => {
  dispatch(postAppointmentRequest());
  try {
    const jsonUpdate = { appointment: data };

    const getAppointment = await fetch(
      'http://localhost:3002/appointments',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: key,
        },
        body: JSON.stringify(jsonUpdate),
      },
    );
    if (getAppointment.status !== 201) {
      throw getAppointment.statusText;
    }
    dispatch(postAppointmentSuccess());
    history.push('/appointmentslist');
  } catch (e) {
    dispatch(postAppointmentError(e));
  }
};

export const dismissAppointment = () => ({ type: DISMISS_APPOINTMENT });

export const fetchAppointmentRequest = () => fetchRequest({
  content: 'Fetching appointments...',
  type: 'info',
  show: false,
});
export const fetchAppointmentSuccess = data => (fetchSuccess(data, {
  content: 'Fetched appointments successfully!',
  type: 'success',
  show: false,
}));
export const fetchAppointmentError = error => (fetchError(error, {
  content: `Failed to fetch appointments: ${error}`,
  type: 'danger',
  show: false,
}));

export const fetchAppointment = data => async dispatch => {
  dispatch(fetchAppointmentRequest());
  try {
    const getAppointment = await fetch(
      'http://localhost:3002/appointments',
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: data,
        },
      },
    );

    if (getAppointment.status !== 200) {
      throw getAppointment.statusText;
    }

    const appointmentJSON = await getAppointment.json();
    dispatch(fetchAppointmentSuccess(appointmentJSON));
  } catch (e) {
    dispatch(fetchAppointmentError(e));
  }
};
