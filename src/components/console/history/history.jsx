import React from 'react';
import {connect} from 'react-redux';
import ConsoleActions from "../../../ducks/console/actions";
import ClearButton from "./components/clearButton/clearButton";
import lang from '../../../utils/lang/ru.json';
import "./history.scss";
import HistoryItem from "./components/historyItem/historyItem";
import HorizontalScroll from 'react-scroll-horizontal'

function History(props) {
    const language = lang.console;
    const {history, clearHistoryAction} = props;

    return (
        <div className="history__main-container">
            <div className="history__history-items-container">
                <HorizontalScroll style={{
                    paddingTop: "17px"
                }}>
                    <>
                        {

                            history.map((item, idx) => (
                                <HistoryItem key={idx} id={idx} {...item}/>
                            ))

                        }
                        <div className="history__fix-scroll"></div>
                    </>
                </HorizontalScroll>
            </div>
            <div className="history__right-shadow"></div>
            <ClearButton onClear={clearHistoryAction}/>
        </div>
    );
}

export default connect((state) => ({
    history: state.console.history
}), {
    clearHistoryAction: ConsoleActions.consoleClearHistory
})(History);