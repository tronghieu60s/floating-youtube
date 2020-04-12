import React, { useEffect, useState } from 'react';
import Welcome from '../components/Welcome';
let { version } = require('../../package.json');

function WelcomeContainer() {
    const [welcome, setWelcome] = useState(() => {
        let welcomeSession = JSON.parse(sessionStorage.getItem("welcome")) || { status: true };
        return welcomeSession.status;
    });

    useEffect(() => {
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