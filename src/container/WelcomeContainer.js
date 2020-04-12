import React, { useEffect, useState } from 'react';
import Welcome from '../components/Welcome';
import { apiYoutubePlayList } from '../api/youtube';
let { version } = require('../../package.json');

const electron = window.require('electron');

function WelcomeContainer() {
    const { dialog } = electron.remote;
    const [welcome, setWelcome] = useState(() => {
        let welcomeSession = JSON.parse(sessionStorage.getItem("welcome")) || { status: true };
        return welcomeSession.status;
    });

    useEffect(() => {
        apiYoutubePlayList("PLFgquLnL59anY3ZwTGcV_5ROFhyGF1U4l", 1, (res) => {
            let options = {
                type: "error",
                title: "Internet connection failed.",
                message: "Internet connection failed.\nThis application requires an Internet connection to continue."
            }
            if (res === "error") {
                let respose = dialog.showMessageBoxSync(options);
                if(respose === 0) window.close();
            }
        })

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