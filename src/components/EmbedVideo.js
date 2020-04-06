import React from 'react';

function EmbedVideo(props) {

    return (
        <div className="col-lg-8">
            <div className="video-player">
                <div className="video">
                    {props.embed ? 
                    <iframe width={560} height={315} 
                    title="" src={`https://www.youtube.com/embed/${props.embed.contentDetails.videoId}?rel=0&autoplay=1`}
                    frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" /> : 
                    null}
                </div>
            </div>
        </div>
    )
}

export default EmbedVideo;