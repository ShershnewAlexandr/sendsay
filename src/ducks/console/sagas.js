import { call, all, takeLatest, put, select } from 'redux-saga/effects';
import {getFormValues, change} from "redux-form";
import types from './types';
import copy from 'copy-to-clipboard';
import consoleActions from './actions';
import sendsay from "../../utils/api";
import JSONFormatter from 'simple-json-formatter';

function* formatSaga() {
    const consoleValues = yield select(getFormValues('console'));
    const requestStr = JSON.stringify(JSON.parse(consoleValues.request));
    const formattedRequestStr = JSONFormatter.format(requestStr, "  ");
    yield put(change('console', 'request', formattedRequestStr));
}

function* requestSaga() {
    const consoleValues = yield select(getFormValues('console'));
    const request = consoleValues.request;
    const requestJSON = JSON.parse(request);
    try {
        const resp = yield sendsay.request(requestJSON);
        const response = JSON.stringify(resp);
        const responseBeauty = JSONFormatter.format(response, "  ");
        yield put(change('console', 'response', responseBeauty));
        yield put(consoleActions.consoleRequestSuccess());
        yield call(addHistoryItem, requestJSON, resp, false);
    } catch (err) {
        const response = JSON.stringify(err);
        const responseBeauty = JSONFormatter.format(response, "  ");
        yield put(change('console', 'response', responseBeauty));
        yield put(consoleActions.consoleRequestError());
        yield call(addHistoryItem, requestJSON, err, true);
    }
}

function* addHistoryItem(request, response, isError) {
    const login = yield select((state) => (state.login.login));
    const historyKey = `${login}__history`
    let currentHistory = JSON.parse(localStorage.getItem(historyKey))
    if (!currentHistory) {
        currentHistory = [];
        localStorage.setItem(historyKey, JSON.stringify(currentHistory));
    }
    const requestStr = JSON.stringify(request);
    const index = currentHistory.findIndex((item) => (JSON.stringify(item.request) === requestStr))
    if (index >= 0) {
        currentHistory.splice(index, 1);
    }
    currentHistory.unshift({
        request,
        response,
        isError
    });
    currentHistory = currentHistory.slice(0, 15);
    localStorage.setItem(historyKey, JSON.stringify(currentHistory));
    yield call(updateHistory);
}

function* updateHistory() {
    const login = yield select((state) => (state.login.login));
    const historyKey = `${login}__history`
    let currentHistory = JSON.parse(localStorage.getItem(historyKey));
    if (!currentHistory) {
        currentHistory = [];
        localStorage.setItem(historyKey, JSON.stringify(currentHistory));
    }
    yield put(consoleActions.consoleUpdateHistory(currentHistory));
}

function* selectHistory(action) {
    const currentHistory = yield call(getHistory);
    const selectedHistoryItem = currentHistory[action.id];
    const request = JSON.stringify(selectedHistoryItem.request);
    const requestBeauty = JSONFormatter.format(request, "  ");
    yield put(change('console', 'request', requestBeauty));
    const response = JSON.stringify(selectedHistoryItem.response);
    const responseBeauty = JSONFormatter.format(response, "  ");
    yield put(change('console', 'response', responseBeauty));
    yield put(consoleActions.consoleSetIsErrorResponse(selectedHistoryItem.isError));
}

function* executeHistory(action) {
    yield call(selectHistory, action);
    yield put(consoleActions.consoleRequest());
}

function* copyHistory(action) {
    const history = yield call(getHistory);
    const historyItem = history[action.id];
    const request = JSON.stringify(historyItem.request);
    const requestBeauty = JSONFormatter.format(request, "  ");
    copy(requestBeauty);
}

function* clearHistory() {
    yield call(setHistory, []);
    yield call(updateHistory);
}

function* deleteHistory(action) {
    const currentHistory = yield call(getHistory);
    currentHistory.splice(action.id, 1);
    yield call(setHistory, currentHistory);
    yield call(updateHistory);
}

function* getHistory() {
    const login = yield select((state) => (state.login.login));
    const historyKey = `${login}__history`;
    let currentHistory = JSON.parse(localStorage.getItem(historyKey));
    return currentHistory;
}

function* setHistory(newHistory) {
    const login = yield select((state) => (state.login.login));
    const historyKey = `${login}__history`;
    localStorage.setItem(historyKey, JSON.stringify(newHistory));
}

export default function*() {
    yield all([
        takeLatest(types.CONSOLE_REQUEST_REQUEST, requestSaga),
        takeLatest(types.FORMAT_JSON, formatSaga),
        takeLatest(types.CONSOLE_LOAD_HISTORY, updateHistory),
        takeLatest(types.CONSOLE_CLEAR_HISTORY, clearHistory),
        takeLatest(types.CONSOLE_HISTORY_ITEM_SELECT, selectHistory),
        takeLatest(types.CONSOLE_HISTORY_ITEM_EXECUTE, executeHistory),
        takeLatest(types.CONSOLE_HISTORY_ITEM_COPY, copyHistory),
        takeLatest(types.CONSOLE_HISTORY_ITEM_DELETE, deleteHistory)
    ]);
}