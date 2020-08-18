import React from 'react';
import {ReactComponent as FormatBtn} from '../../../../assets/img/format.svg';
import lang from '../../../../utils/lang/ru.json';
import "./format.scss";

function Format(props) {
    const language = lang.buttons;
    const {onFormat, disabled} = props;

    return (
        <button className="format__container" disabled={disabled} tabIndex={1} onClick={onFormat}>
            <FormatBtn/>
            <span>{language.format}</span>
        </button>
    );
}

export default Format;