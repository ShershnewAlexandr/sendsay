import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import TextInput from "../common/textInput/textInput";
import loginActions from "../../ducks/login/actions";
import validate from "./validate";
import lang from '../../utils/lang/ru.json';
import {ReactComponent as Loader} from "../../assets/img/loader.svg";
import {ReactComponent as ErrorMan} from "../../assets/img/login_error.svg";
import "./login.scss";

function onLogin(values, dispatch) {
    const login = values.login;
    const subLogin = values.subLogin;
    const password = values.password;

    return new Promise((resolve, reject) => {
        dispatch(loginActions.loginRequest(login, subLogin, password, resolve, reject));
    }).catch(error => {
        throw new SubmissionError({_error: error});
    });
}

function Login(props) {
    const { handleSubmit, submitting, valid, error} = props;
    const language = lang.login;

    return (
        <div className="login__main-container">
            <h1 className="login__head text-black mb-20">{language.head}</h1>
            {
                error && (
                    <div className="login__error-container mb-20">
                        <div className="login__error-svg-container">
                            <ErrorMan/>
                        </div>
                        <div className="login__error-text-container">
                            <span className="login__error-h1">{language.error}</span>
                            <span className="login__error-h2">{JSON.stringify(error)}</span>
                        </div>
                    </div>
                )
            }
            <form onSubmit={handleSubmit(onLogin)}>
                <Field
                    name="login"
                    label={language.login}
                    component={TextInput}
                    type="text"
                    disabled={submitting}
                />
                <Field
                    name="subLogin"
                    label={language.subLogin}
                    component={TextInput}
                    type="text"
                    isOptional
                    disabled={submitting}
                />
                <Field
                    name="password"
                    label={language.password}
                    component={TextInput}
                    type="text"
                    isPassword
                    disabled={submitting}
                />
                <button
                    type="submit"
                    className={`btn btn_login ${submitting ? "btn_loading" : ""}`}
                    disabled={!valid || submitting}
                >
                    {submitting ? (
                        <div className="btn_loader">
                            <Loader/>
                        </div>
                    ) : (
                        language.btnEnter
                    )}
                </button>
            </form>
        </div>
    );
}

export default connect(
    null, {
    }
)(
    reduxForm({ form: 'login', validate, initialValues: {login: "", subLogin: "", password: ""} })(Login)
);
