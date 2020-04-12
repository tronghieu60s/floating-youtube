import React, { useState } from 'react';
import closeIcon from '../icons/close.svg';
import darkIcon from '../icons/dark.svg';
import lightIcon from '../icons/light.svg';
import minimizeIcon from '../icons/minimize.svg';
import tabsIcon from '../icons/tabs.svg';

const electron = window.require('electron');

function ControlContainer(props) {
    let st = JSON.parse(localStorage.getItem(".config-st")) || {};
    let window = electron.remote.getCurrentWindow();
    const { dialog } = electron.remote;

    let { darkMode } = props;
    const [floating, setFloating] = useState(() => st.floating || false);
    window.setAlwaysOnTop(floating, "floating");

    return (
        <div className="controls-window">
            <div className="controls-window-move" style={{ WebkitAppRegion: 'drag' }}></div>
            <div>
                <button onClick={() => props.setDarkMode(!darkMode)} type="button" className={`btn ${darkMode ? "btn-dark" : "btn-light"} btn-sm`}>
                    <img className="controls-window-icon" src={darkMode ? darkIcon : lightIcon} alt={darkMode ? darkIcon : lightIcon} />
                </button>
                <button onClick={() => {
                    setFloating(!floating);
                    st['floating'] = !floating;
                    localStorage.setItem(".config-st", JSON.stringify(st));
                }} type="button" className={`btn ${floating ? "btn-warning" : "btn-success"} btn-sm`}>
                    <img className="controls-window-icon" src={tabsIcon} alt={tabsIcon} />
                </button>
                <button onClick={() => window.minimize()} type="button" className="btn btn-primary btn-sm">
                    <img className="controls-window-icon" src={minimizeIcon} alt={minimizeIcon} />
                </button>
                <button onClick={() => {
                    setFloating(false);
                    st['floating'] = !floating;
                    localStorage.setItem(".config-st", JSON.stringify(st));
                    
                    let options = {
                        type: "warning",
                        title: "Floating Youtube",
                        buttons: ["Yes", "No"],
                        message: "Do you really want to quit?"
                    }
                    let response = dialog.showMessageBox(options)
                    response.then(res => {
                        if (res.response === 0) window.close();
                    })
                }} type="button" className="btn btn-danger btn-sm">
                    <img className="controls-window-icon" src={closeIcon} alt={closeIcon} />
                </button>
            </div>
        </div>
    )
}

export default ControlContainer;