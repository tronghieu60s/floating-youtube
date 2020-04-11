import React from 'react';

const electron = window.require('electron');

function Controls(props) {
    var window = electron.remote.getCurrentWindow();
    let { videoSize, autoPlay } = props;

    return (
        <div className="mb-3">
            <h3 className="text-uppercase mb-0">My {props.type}</h3>
            <small className="text-muted">Youtube</small>
            <button onClick={() => {
                sessionStorage.removeItem(".config-url");
                window.reload();
            }} type="button" className="btn btn-primary btn-sm float-right">Edit {props.type}</button>
            <div className="row mt-4">
                <div className="col-sm-8">
                    <div className="slidecontainer">
                        <h4 className="mb-0">Size Default Play Video.</h4>
                        <input type="range" min="200" max="640" defaultValue={videoSize} className="slider" id="myRange" onInput={(e) => props.setVideoSize(e.target.value)} />
                        <span className="ml-2">{videoSize} x {(videoSize * (360 / 640)).toFixed(0)}</span>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="controls-toggles">
                        <h3 className="mr-2">Autoplay:</h3>
                        <label className="custom-toggle">
                            <input type="checkbox" onChange={() => props.setAutoPlay(!autoPlay)} checked={autoPlay} />
                            <span className="custom-toggle-slider rounded-circle" data-label-off="No" data-label-on="Yes"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Controls;