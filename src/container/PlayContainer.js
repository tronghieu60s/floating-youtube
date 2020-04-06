import React, { useState, useEffect } from 'react';
import Play from '../components/Play';

import { apiYoutubePlayList } from '../api/youtube';

function PlayContainer() {
    const [video, setVideo] = useState();
    let urlYoutube = JSON.parse(sessionStorage.getItem(".config-url"));

    useEffect(() => {
        switch (urlYoutube.type) {
            case "video":

                break;
            case "playlist":
                apiYoutubePlayList(urlYoutube.id, 20, (data) => {
                    setVideo(data);
                })
                break;
            default:
                break;
        }
    }, [])

    return (
        <Play video={video} playlistId={urlYoutube.id}></Play>
    );
}

export default PlayContainer;
