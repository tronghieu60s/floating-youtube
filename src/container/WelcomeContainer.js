import React, { useEffect, useState } from 'react';
import Welcome from '../components/Welcome';
let { version } = require('../../package.json');

const electron = window.require('electron');

function WelcomeContainer() {
    const { dialog } = electron.remote;
    const [welcome, setWelcome] = useState(() => {
        let welcomeSession = JSON.parse(sessionStorage.getItem("welcome")) || { status: true };
        return welcomeSession.status;
    });

    useEffect(() => {
        // let options  = {
        //     buttons: ["Yes","No","Cancel"],
        //     message: "Do you really want to quit?"
        //    }
        // dialog.showMessageBox(options)

        let welcomeTime = setTimeout(() => {
            sessionStorage.setItem("welcome", JSON.stringify({ status: false }));
            setWelcome(false);
        }, 3000);
        return () => {
            clearTimeout(welcomeTime);
        }
    }, [])

    return (
        <Welcome
            welcome={welcome}
            version={version}>
        </Welcome>
    )
}

export default WelcomeContainer;