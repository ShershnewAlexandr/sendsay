import React from 'react';
import "./userInfo.scss";

function UserInfo(props) {
    return (
        <div className="user-info__main-container">
            <span>{props.login}</span>
            {
                props.sublogin && (
                    <>
                        <span className="user-info__separator">:</span>
                        <span>{props.sublogin}</span>
                    </>
                )
            }
        </div>
    );
}

export default UserInfo;