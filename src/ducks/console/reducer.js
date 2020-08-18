import types from './types';
import loginTypes from '../login/types';

const initialState = {
    isErrorResponse: false,
    submitting: false,
    history: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.CONSOLE_REQUEST_REQUEST:
            return {
                ...state,
                submitting: true
            };

        case types.CONSOLE_REQUEST_SUCCESS:
            return {
                ...state,
                isErrorResponse: false,
                submitting: false
            };

        case types.CONSOLE_REQUEST_ERROR:
            return {
                ...state,
                isErrorResponse: true,
                submitting: false
            };

        case types.CONSOLE_UPDATE_HISTORY:
            return {
                ...state,
                history: action.history
            };

        case types.CONSOLE_SET_IS_ERROR_RESPONSE:
            return {
                ...state,
                isErrorResponse: action.isErrorResponse
            };

        case loginTypes.LOGOUT_REQUEST:
            return initialState

        default:
            return state;
    }
}