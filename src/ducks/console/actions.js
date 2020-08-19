import types from './types';

export default {
    formatRequest() {
        return {
            type: types.FORMAT_JSON
        };
    },

    consoleRequest() {
        return {
            type: types.CONSOLE_REQUEST_REQUEST
        };
    },

    consoleRequestError() {
        return {
            type: types.CONSOLE_REQUEST_ERROR
        };
    },

    consoleRequestSuccess() {
        return {
            type: types.CONSOLE_REQUEST_SUCCESS
        };
    },

    consoleUpdateHistory(history) {
        return {
            type: types.CONSOLE_UPDATE_HISTORY,
            history
        };
    },

    consoleClearHistory() {
        return {
            type: types.CONSOLE_CLEAR_HISTORY
        };
    },

    consoleHistoryItemSelect(id) {
        return {
            type: types.CONSOLE_HISTORY_ITEM_SELECT,
            id
        };
    },

    consoleHistoryItemExecute(id) {
        return {
            type: types.CONSOLE_HISTORY_ITEM_EXECUTE,
            id
        };
    },

    consoleHistoryItemCopy(id) {
        return {
            type: types.CONSOLE_HISTORY_ITEM_COPY,
            id
        };
    },

    consoleHistoryItemDelete(id) {
        return {
            type: types.CONSOLE_HISTORY_ITEM_DELETE,
            id
        };
    },

    consoleSetIsErrorResponse(isErrorResponse) {
        return {
            type: types.CONSOLE_SET_IS_ERROR_RESPONSE,
            isErrorResponse
        };
    },

    consoleSetSettings(w1) {
        return {
            type: types.CONSOLE_SET_SETTINGS,
            w1
        };
    },

    consoleUpdateSettings(settings) {
        return {
            type: types.CONSOLE_UPDATE_SETTINGS,
            settings
        };
    },
}