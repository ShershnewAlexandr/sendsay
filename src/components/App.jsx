import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './pages/login/loginPage';
import ConsolePage from './pages/console/consolePage';
import { routes } from '../utils/constants';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={routes.SIGNIN} component={LoginPage} />
                <Route path={routes.CONSOLE} component={ConsolePage} />
                <Route path="/" render={props => <Redirect to={routes.SIGNIN} />} />
            </Switch>
        </div>
    );
}

export default App;