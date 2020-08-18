import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router'
import loginReducer from '../login/reducer';
import consoleReducer from '../console/reducer';

export default (history) => combineReducers({
    login: loginReducer,
    console: consoleReducer,
    form,
    router: connectRouter(history),
});
