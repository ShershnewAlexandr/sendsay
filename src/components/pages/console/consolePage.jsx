import React from 'react';
import Header from '../../console/header/header';
import History from '../../console/history/history';
import Body from '../../console/body/body';
import Footer from '../../console/footer/footer';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function ConsolePage() {
    const fullScreenHandle = useFullScreenHandle();

    return (
        <FullScreen handle={fullScreenHandle}>
            <Header fullScreenHandle={fullScreenHandle}/>
            <History/>
            <Body/>
            <Footer/>
        </FullScreen>
    );
}

export default ConsolePage;