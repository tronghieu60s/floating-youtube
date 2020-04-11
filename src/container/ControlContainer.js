import React, { useState } from 'react';
import closeIcon from '../icons/close.svg';
import minimizeIcon from '../icons/minimize.svg';
import tabsIcon from '../icons/tabs.svg';

const electron = window.require('electron');

function ControlContainer() {
    var window = electron.remote.getCurrentWindow();
    const [floating, setFloating] = useState(false);
    window.setAlwaysOnTop(floating, "floating");

    return (
        <div className="controls-window">
            <div className="controls-window-move" style={{ WebkitAppRegion: 'drag' }}></div>
            <div>
                <button onClick={() => setFloating(!floating)} type="button" className={`btn ${floating ? "btn-warning" : "btn-success"} btn-sm`}>
                    <img className="controls-window-icon" src={tabsIcon} alt={tabsIcon}/>
                </button>
                <button onClick={() => window.minimize()} type="button" className="btn btn-primary btn-sm">
                    <img className="controls-window-icon" src={minimizeIcon} alt={minimizeIcon}/>
                </button>
                <button onClick={() => window.close()} type="button" className="btn btn-danger btn-sm">
                    <img className="controls-window-icon" src={closeIcon} alt={closeIcon}/>
                </button>
            </div>
        </div>
    )
}

export default ControlContainer;