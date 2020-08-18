import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../../assets/img/logo.svg';
import Fullscreen from "../../common/buttons/fullscreen/fullscreen";
import Exit from "../../common/buttons/exit/exit"
import UserInfo from "./components/userInfo/userInfo";
import LoginActions from "../../../ducks/login/actions";
import lang from '../../../utils/lang/ru.json';
import "./header.scss";

function Header(props) {
    const language = lang.console;
    const {logoutAction, fullScreenHandle, login, sublogin} = props;

    const onChangeFullScreen = () => {
        if (props.fullScreenHandle.active) {
            fullScreenHandle.exit();
        } else {
            fullScreenHandle.enter();
        }
    }

    return (
        <div className="header__main-container">
            <div className="header__left-block">
                <Logo />
                <h1 className="header__h1 text-black">{language.head}</h1>
            </div>
            <div className="header__right-block">
                <UserInfo login={login} sublogin={sublogin}/>
                <Exit onExit={logoutAction}/>
                <Fullscreen isActive={fullScreenHandle.active} onChange={onChangeFullScreen}/>
            </div>
        </div>
    );
}

export default connect((state) => ({
    login: state.login.login,
    sublogin: state.login.sublogin
}), {
    logoutAction: LoginActions.logoutRequest
})(Header);