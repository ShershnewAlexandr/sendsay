import React from 'react';
import {connect} from 'react-redux';
import {isValid} from "redux-form";
import Format from "../../common/buttons/format/format";
import ConsoleActions from "../../../ducks/console/actions";
import lang from '../../../utils/lang/ru.json';
import "./footer.scss";
import {ReactComponent as Loader} from "../../../assets/img/loader.svg";

function Footer(props) {
    const {isValid, submitting, consoleFormatRequestAction, consoleRequestAction} = props;

    return (
        <div className="footer__main-container">
            <button
                className={`btn btn_send ${submitting ? "btn_loading" : ""}`}
                disabled={!isValid || submitting}
                onClick={consoleRequestAction}
            >
                {submitting ? (
                    <div className="btn_loader">
                        <Loader/>
                    </div>
                ) : (
                    lang.buttons.send
                )}
            </button>
            <Format disabled={!isValid} onFormat={consoleFormatRequestAction}/>
        </div>
    );
}

export default connect((state) => ({
    isValid: isValid('console')(state),
    submitting: state.console.submitting
}), {
    consoleFormatRequestAction: ConsoleActions.formatRequest,
    consoleRequestAction: ConsoleActions.consoleRequest
})(Footer);