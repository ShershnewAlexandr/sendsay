import React from 'react';
import {ReactComponent as ExitBtn} from '../../../../assets/img/exit.svg';
import lang from '../../../../utils/lang/ru.json';
import "./exit.scss";

function Exit(props) {
    const language = lang.buttons;
    const {onExit} = props;

    return (
        <button className="exit__container" tabIndex={1} onClick={onExit}>
            <span>{language.exit}</span>
            <ExitBtn/>
        </button>
    );
}

export default Exit;