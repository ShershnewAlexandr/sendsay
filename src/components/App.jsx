import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './pages/login/loginPage';
import ConsolePage from './pages/console/consolePage';
import { routes } from '../utils/constants';

function App(props) {
    const {autologinError, isAuthorized} = props;

    return (
        <div className="App">
            {isAuthorized || autologinError ? (
                <Switch>
                    <Route path={routes.SIGNIN} component={LoginPage} />
                    <Route path={routes.CONSOLE} component={ConsolePage} />
                    <Route path="/" render={props => <Redirect to={routes.SIGNIN} />} />
                </Switch>
            ) : (
              <div>Loading</div>
            )}
        </div>
    );
}

export default connect((state) => ({
    isAuthorized: state.login.isAuthorized,
    autologinError: state.login.autologinError
}))(App);