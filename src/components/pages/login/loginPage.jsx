import React from 'react';
import Login from '../../login/login';
import {ReactComponent as Logo} from '../../../assets/img/logo.svg';
import "./loginPage.scss";

function LoginPage() {
    return (
        <div className="login-page__main-container">
            <div className="login-page__logo-container">
                <Logo />
            </div>
            <Login />
        </div>
    );
}

export default LoginPage;