import { call, all } from 'redux-saga/effects';
import loginSagas from '../login/sagas';
import consoleSagas from '../console/sagas';

export default function*() {
    yield all([call(loginSagas), call(consoleSagas)]);
}
