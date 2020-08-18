import React from 'react';
import {connect} from "react-redux";
import lang from '../../../utils/lang/ru.json';
import "./body.scss";
import TextareaInput from "../../common/textareaInput/textareaInput";
import {Field, reduxForm} from "redux-form";
import validate from "./validate";
import {ReactComponent as Spliter} from "../../../assets/img/spliter.svg";

function Body(props) {
    const language = lang.console;
    return (
        <form>
            <div className="body__main-container">
                <div className="body__block">
                    <Field
                        name="request"
                        label={language.request}
                        component={TextareaInput}
                        type="text"
                        disabled={false}
                        width={"calc(50vw - 20px)"}
                    />
                </div>
                <div className="body__spliter">
                    <div className="body__spliter__drag-container">
                        <Spliter/>
                    </div>
                </div>
                <div className="body__block">
                    <Field
                        name="response"
                        label={language.response}
                        component={TextareaInput}
                        type="text"
                        disabled={false}
                        width={"calc(50vw - 20px)"}
                        readOnly
                        isError={props.isErrorResponse}
                    />
                </div>
            </div>
        </form>
    );
}

export default connect((state) => ({
    isErrorResponse: state.console.isErrorResponse
}))(
    reduxForm({ form: 'console', validate})(Body)
);
