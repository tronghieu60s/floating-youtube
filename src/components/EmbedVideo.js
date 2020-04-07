import React, { useState } from 'react';
import YouTube from 'react-youtube';
const electron = window.require('electron');

function EmbedVideo(props) {
    var window = electron.remote.getCurrentWindow();
    const [fullScreen, setFullScreen] = useState(false);

    return (
        <div className="col-lg-8">
            <div className="video-player">
                <div className="video">
                    {props.embed ? <YouTube
                        videoId={props.embed.contentDetails.videoId}
                        className={fullScreen ? "frame-youtube" : null}
                        opts={{
                            playerVars: {
                                fs: 0,
                                // autoplay: 1,
                            }
                        }}
                        onPlay={() => {
                            let videoSizeWidth = parseInt(props.videoSize);
                            let videoSizeHeight = parseInt((videoSizeWidth * (360 / 640)).toFixed(0));
                            window.setSize(videoSizeWidth, videoSizeHeight);
                            setFullScreen(true);
                            props.fullScreen(true);
                        }}
                        onPause={() => {
                            window.setSize(800, 600);
                            setFullScreen(false);
                            props.fullScreen(false);
                        }}
                        onEnd={props.onEndVideo}>
                    </YouTube> : null}
                </div>
            </div>
        </div>
    )
}

export default EmbedVideo;