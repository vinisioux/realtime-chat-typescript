import { put, call, take, takeEvery } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';

import {
  Action,
  ActionTypes,
  LoginRequest,
  loginSuccess,
  logout,
} from './actions';

export function* loginRequestSaga(action: LoginRequest) {
  // yield put({type: ActionTypes.LOGIN_REQUEST});
  // yield call(delay, 500);
  // yield put(loginSuccess('asbasdfa'));
  // console.log(action.payload);
  try {
    const { username, password } = action.payload;

    const response = yield call(api.post, '/sessions', {
      username,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(loginSuccess(token));

    history.push('/chat');
  } catch (err) {
    console.log('error');
  }
}

export function* watchLoginRequest() {
  console.log('watchLoginRequest!');
  yield takeEvery(ActionTypes.LOGIN_REQUEST, loginRequestSaga);
}

export function* watchLoginSuccess() {
  yield take(ActionTypes.LOGIN_SUCCESS);
  console.log('HUGE SUCCESS!');
}

export function* watchLoginFailure() {
  yield take(ActionTypes.LOGIN_FAILURE);
  console.log('DAMMIT - SHIT FAILED YO');
}

export function* watchLogout() {
  yield takeEvery(ActionTypes.LOGOUT, logout);

  console.log('LOGOUT');

  // yield put(push('/'));
}
