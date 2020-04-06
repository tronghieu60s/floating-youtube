import React, { useState } from 'react';

import EmbedVideo from './EmbedVideo';
import PlayListItem from './PlayListItem';

function Play(props) {
    const [videoRun, setVideoRun] = useState(0);

    function renderPlaylistVideo(video) {
        if (!video) return (<p className="ml-2">Đang Load...</p>)
        let result = null;
        result = video.map((item, index) => {
            return (
                <PlayListItem
                    handleSetVideo={() => setVideoRun(index)}
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
                <EmbedVideo embed={props.video ? props.video.items[videoRun] : null}></EmbedVideo>
                <div className="col-lg-4">
                    <div className="border mt-4 p-3">
                        <div className="mb-3">
                            <h3 className="text-uppercase mb-0">My playlists: MUSIC</h3>
                            <small className="text-muted">Youtube</small>
                        </div>
                        <div className="playlist border mt-2">
                            {renderPlaylistVideo(props.video ? props.video.items : null)}
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
