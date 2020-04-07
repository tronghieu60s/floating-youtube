import React, { useState, useEffect } from 'react';
import Play from '../components/Play';

import { apiYoutubePlayList } from '../api/youtube';

function PlayContainer(props) {
    const [video, setVideo] = useState();
    let urlYoutube = JSON.parse(sessionStorage.getItem(".config-url"));

    useEffect(() => {
        switch (urlYoutube.type) {
            case "video":

                break;
            case "playlist":
                apiYoutubePlayList(urlYoutube.id, 50, (data) => {
                    setVideo(data.items);
                })
                break;
            default:
                break;
        }
    }, [])

    function handleDeleteVideo(index){
        let handleVideo = [...video];
        handleVideo.splice(index, 1);
        setVideo(handleVideo);
    }

    return (
        <Play fullScreen={props.fullScreen} video={video ? video : null} handleDeleteVideo={handleDeleteVideo}></Play>
    );
}

export default PlayContainer;
