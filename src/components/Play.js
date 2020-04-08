import React, { useState } from 'react';
import EmbedVideo from './Play/EmbedVideo';
import PlayListItem from './Play/PlayListItem';
import Controls from './Play/Controls';

function Play(props) {
    const [videoRun, setVideoRun] = useState(0);
    const [videoSize, setVideoSize] = useState(640);
    const [autoPlay, setAutoPlay] = useState(false);

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
        <div className="container">
            <div className="row">
                <EmbedVideo
                    fullScreen={props.fullScreen}
                    videoSize={videoSize}
                    autoPlay={autoPlay}
                    embed={props.video ? props.video[videoRun >= props.video.length ? setVideoRun(0) : videoRun] : null}
                    onEndVideo={() => setVideoRun(videoRun + 1)}>
                </EmbedVideo>
                <div className="col-lg-4 mb-5">
                    <div className="border mt-4 p-3">
                        <Controls
                            type={props.type}
                            videoSize={videoSize}
                            setVideoSize={(size) => setVideoSize(size)}
                            autoPlay={autoPlay}
                            setAutoPlay={(auto) => setAutoPlay(auto)}>
                        </Controls>
                        {props.type === 'playlist' ?
                            <div className="playlist border mt-2">
                                {renderPlaylistVideo(props.video)}
                            </div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Play;
