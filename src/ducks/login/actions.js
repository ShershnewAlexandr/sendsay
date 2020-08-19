import types from './types';
import consoleTypes from '../console/types';

export default {
    loginRequest(login, subLogin, password, resolve, reject) {
        return {
            type: types.LOGIN_REQUEST,
            login, subLogin, password, resolve, reject
        };
    },

    loginSuccess(login, subLogin) {
        return {
            type: types.LOGIN_SUCCESS,
            login, subLogin
        };
    },

    logoutRequest() {
        return {
            type: types.LOGOUT_REQUEST
        };
    },

    loadHistory() {
        return {
            type: consoleTypes.CONSOLE_LOAD_HISTORY
        };
    },

    loadSettings() {
        return {
            type: consoleTypes.CONSOLE_LOAD_SETTINGS
        };
    },

    autoLoginError() {
        return {
            type: types.AUTO_LOGIN_ERROR
        };
    }
}