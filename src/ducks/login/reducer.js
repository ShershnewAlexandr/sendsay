import types from './types';

const initialState = {
    login: null,
    sublogin: null,
    isAuthorized: false,
    autologinError: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
            };

        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthorized: true,
                login: action.login,
                sublogin: action.subLogin
            };

        case types.LOGIN_ERROR:
            return {
                ...state,
            };

        case types.AUTO_LOGIN_ERROR:
            return {
                ...state,
                autologinError: true
            };

        case types.LOGOUT_REQUEST:
            return {
                ...initialState,
                autologinError: true
            }

        default:
            return state;
    }
}
