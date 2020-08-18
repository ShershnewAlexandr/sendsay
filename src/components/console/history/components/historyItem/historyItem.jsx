import React from 'react';
import {connect} from 'react-redux';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import {ReactComponent as Spliter} from "../../../../../assets/img/spliter.svg";
import ConsoleActions from "../../../../../ducks/console/actions";
import HistoryItemMenu from "./components/historyItemMenu/historyItemMenu";
import "./historyItem.scss";

function HistoryItem(props) {
    const {id, isError, request,
        consoleHistoryItemSelectAction,
        consoleHistoryItemExecuteAction,
        consoleHistoryItemCopyAction,
        consoleHistoryItemDeleteAction
    } = props;
    return (
        <div className="history-item__main-container">
            <div className="history-item__select-container" onClick={() => {consoleHistoryItemSelectAction(id)}}>
                <div className={`history-item__indicator_${isError ? "error" : "success"}`}></div>
                {request.action && (
                    <span className="history-item__action">{request.action}</span>
                )}
            </div>
            <Dropdown
                trigger={['click']}
                overlay={
                    <div className={`history-item__dropped-container ${id === 0 ? "history-item__dropped-container_first" : ""}`}>
                        <HistoryItemMenu
                            onExecute={() => {consoleHistoryItemExecuteAction(id)}}
                            onCopy={() => {consoleHistoryItemCopyAction(id)}}
                            onDelete={() => {consoleHistoryItemDeleteAction(id)}}
                        />
                    </div>
                }
                animation="slide-up"
            >
                <Spliter className="history-item__more-btn"/>
            </Dropdown>
        </div>
    );
}

export default connect(null, {
    consoleHistoryItemSelectAction: ConsoleActions.consoleHistoryItemSelect,
    consoleHistoryItemExecuteAction: ConsoleActions.consoleHistoryItemExecute,
    consoleHistoryItemCopyAction: ConsoleActions.consoleHistoryItemCopy,
    consoleHistoryItemDeleteAction: ConsoleActions.consoleHistoryItemDelete
})(HistoryItem);