import React from 'react';
import "./historyItemMenu.scss";
import lang from '../../../../../../../utils/lang/ru.json';

function HistoryItemMenu(props) {
    const {onExecute, onCopy, onDelete} = props;
    const language = lang.console.historyItemMenu;

    return (
        <div className="history-item-menu__main-container">
            <button className="history-item-menu__btn" onClick={onExecute}>{language.execute}</button>
            <button className="history-item-menu__btn history-item-menu__btn-copy" onClick={onCopy}>{language.copy}</button>
            <div className="history-item-menu__hr"></div>
            <button className="history-item-menu__btn history-item-menu__btn_destroy" onClick={onDelete}>{language.delete}</button>
        </div>
    );
}

export default HistoryItemMenu;