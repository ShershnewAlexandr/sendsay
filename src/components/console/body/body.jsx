import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import lang from '../../../utils/lang/ru.json';
import "./body.scss";
import TextareaInput from "../../common/textareaInput/textareaInput";
import {Field, reduxForm} from "redux-form";
import ConsoleActions from '../../../ducks/console/actions';
import validate from "./validate";
import {ReactComponent as Spliter} from "../../../assets/img/spliter.svg";

function Body(props) {
    const [W1, setW1] = useState(50);
    useEffect(() => {
        setW1(props.w1);
    },[props.w1]);
    function getWidth(x) {
        const bodyWidth = document.documentElement.clientWidth;
        let w1 = (x / bodyWidth) * 100;
        if (w1 < 10) {
            w1 = 10;
        }
        if (w1 > 90) {
            w1 = 90;
        }
        return w1
    }

    function onMouseMove(e) {
        const w1 = getWidth(e.clientX);
        setW1(w1);
    }

    function onMouseDown(e) {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    function onMouseUp(e) {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        const w1 = getWidth(e.clientX);
        props.setSettings(w1);
    }

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
                        width={`calc(${W1}vw - 20px)`}
                    />
                </div>
                <div className="body__spliter"
                     onDrag={(e) => {e.preventDefault()}}>
                    <div className="body__spliter__drag-container"
                         onMouseDown={onMouseDown}
                         onDrag={(e) => {e.preventDefault()}}>
                        <Spliter onDrag={(e) => {e.preventDefault()}}/>
                    </div>
                </div>
                <div className="body__block">
                    <Field
                        name="response"
                        label={language.response}
                        component={TextareaInput}
                        type="text"
                        disabled={false}
                        width={`calc(${100 - W1}vw - 20px)`}
                        readOnly
                        isError={props.isErrorResponse}
                    />
                </div>
            </div>
        </form>
    );
}

export default connect((state) => ({
    isErrorResponse: state.console.isErrorResponse,
    w1: state.console.settings.w1
}), {
    setSettings: ConsoleActions.consoleSetSettings
})(
    reduxForm({ form: 'console', validate})(Body)
);
