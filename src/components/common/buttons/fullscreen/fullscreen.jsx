import React from 'react';
import {ReactComponent as FullscreenBtn} from '../../../../assets/img/fullscreenBtn.svg';
import {ReactComponent as FullscreenActiveBtn} from '../../../../assets/img/fullscreenActiveBtn.svg';
import "./fullscreen.scss";

function Fullscreen(props) {
    return (
        <button className="fullscreen__container" tabIndex={1} onClick={props.onChange}>
            {
                props.isActive ? (<FullscreenActiveBtn/>) : (<FullscreenBtn/>)
            }
        </button>
    );
}

export default Fullscreen;