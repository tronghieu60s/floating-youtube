import React from 'react';

const electron = window.require('electron');

function ControlContainer() {
    var window = electron.remote.getCurrentWindow();
    return (
        <div className="window-control">
            <button style={{ WebkitAppRegion: 'drag' }} type="button" className="btn btn-success btn-sm">
                <i className="fa fa-arrows" aria-hidden="true"></i>
            </button>
            <button onClick={() => window.minimize()} type="button" className="btn btn-primary btn-sm">
                <i className="fa fa-window-minimize" aria-hidden="true"></i>
            </button>
            <button onClick={() => window.close()} type="button" className="btn btn-danger btn-sm">
                <i className="fa fa-window-close-o" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default ControlContainer;