import { all, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from './auth/actions';
import { loginRequestSaga } from './auth/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(ActionTypes.LOGIN_REQUEST, loginRequestSaga)]);
}
