import React from 'react';
import {ReactComponent as CrossBtn} from '../../../../../assets/img/cross.svg';
import "./clearButton.scss";

function ClearButton(props) {
    return (
        <button className="clear-button__container" tabIndex={1} onClick={props.onClear}>
            <CrossBtn/>
        </button>
    );
}

export default ClearButton;