import React, { useState } from 'react';

import EmbedVideo from './EmbedVideo';
import PlayListItem from './PlayListItem';

const electron = window.require('electron');

function Play(props) {
    var window = electron.remote.getCurrentWindow();
    const [videoRun, setVideoRun] = useState(0);
    const [floating, setFloating] = useState(false);
    const [videoSize, setVideoSize] = useState(640);
    window.setAlwaysOnTop(floating, "floating");

    function renderPlaylistVideo(video) {
        if (!video) return (<p className="ml-2 text-danger">Đang Load...</p>)
        let result = null;
        result = video.map((item, index) => {
            return (
                <PlayListItem
                    handleSetVideo={() => setVideoRun(index)}
                    handleDeleteVideo={() => props.handleDeleteVideo(index)}
                    videoRun={videoRun === index ? true : false} key={index}
                    item={item.contentDetails.videoId}>
                </PlayListItem>
            )
        })
        return result;
    }

    return (
        <div className="container my-5">
            <div className="row">
                <EmbedVideo
                    fullScreen={props.fullScreen}
                    videoSize={videoSize}
                    embed={props.video ? props.video[videoRun >= props.video.length ? setVideoRun(0) : videoRun] : null}
                    onEndVideo={() => setVideoRun(videoRun + 1)}>
                </EmbedVideo>
                <div className="col-lg-4">
                    <div className="border mt-4 p-3">
                        <div className="mb-3">
                            <h3 className="text-uppercase mb-0">My playlists</h3>
                            <small className="text-muted">Youtube</small>
                            <button onClick={() => {
                                setFloating(!floating);
                                alert("Success!");
                            }} type="button" className={`btn ${floating ? "btn-danger" : "btn-primary"} btn-sm float-right`}>{floating ? "No Floating" : "Floating"}</button>
                            <div className="slidecontainer">
                                <h4 className="mt-3 mb-0">Size Default Play Video.</h4>
                                <input type="range" min="200" max="640" defaultValue={videoSize} className="slider" id="myRange" onInput={(e) => setVideoSize(e.target.value)} />
                                <span className="ml-2">{videoSize} x {videoSize * (360 / 640)}</span>
                            </div>
                        </div>
                        <div className="playlist border mt-2">
                            {renderPlaylistVideo(props.video)}
                        </div>
                        <div className="card card-body bg-secondary" style={{ width: '100%', marginTop: '18px' }}>
                            <form method="POST">
                                <h5 className="text-uppercase">Edit Playlist</h5>
                                <div className="form-wrap my-1">
                                    <input type="text" className="form-control form-control-alternative" placeholder="Paste Your URL..." />
                                    <button type="button" className="btn btn-primary ml-2">OK</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Play;
