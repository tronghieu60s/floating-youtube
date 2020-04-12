import React from 'react';

function Welcome(props) {
    let { welcome, version } = props;

    return (
        <div className="welcome" style={!welcome ?
            { opacity: 0, visibility: "hidden" } :
            { opacity: 1, visibility: "visible" }}>
            <img className="welcome-img" src="./logo512.png" alt="./logo512.png" />
            <h2 className="welcome-text">Floating Youtube</h2>
            <small className="text-muted">Version: {version}</small>
        </div>
    )
}

export default Welcome;