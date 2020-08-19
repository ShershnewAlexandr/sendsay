import { call, all, takeLatest, put } from 'redux-saga/effects';
import types from './types';
import {push} from 'connected-react-router';
import loginActions from './actions';
import sendsay from "../../utils/api";
import {routes} from "../../utils/constants";

async function login(action, _sendsay) {
    return _sendsay.login({
        login: action.login,
        sublogin: action.subLogin,
        password: action.password,
    });
}

function* loginSaga(action) {
    try {
        yield call(login, action, sendsay);
        const resp = yield sendsay.request({
            action: 'pong',
        })
        yield put(loginActions.loginSuccess(resp.account, resp.sublogin));
        yield put(loginActions.loadHistory());
        yield put(loginActions.loadSettings());
    } catch (err) {
        action.reject({id: err.id, explain: err.explain});
        return;
    }
    localStorage.setItem("session", sendsay.session);
    action.resolve();
    yield put(push(routes.CONSOLE));
}

function* autoLogin() {
    const session = localStorage.getItem("session");

    if (session) {
        sendsay.setSession(session);
        try {
            const resp = yield sendsay.request({
                action: 'pong',
            })
            yield put(loginActions.loginSuccess(resp.account, resp.sublogin));
            yield put(loginActions.loadHistory());
            yield put(loginActions.loadSettings());
            yield put(push(routes.CONSOLE));
        } catch (e) {
            yield put(loginActions.autoLoginError());
            yield call(logoutSaga);
        }
    } else {
        yield put(loginActions.autoLoginError());
        yield call(logoutSaga);
    }
}

function* logoutSaga(){
    localStorage.setItem("session", "");
    yield put(push(routes.SIGNIN));
}

export default function*() {
    yield all([
        call(autoLogin),
        takeLatest(types.LOGIN_REQUEST, loginSaga),
        takeLatest(types.LOGOUT_REQUEST, logoutSaga)
    ]);
}