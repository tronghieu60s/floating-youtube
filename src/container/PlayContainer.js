import React, { useEffect, useState } from 'react';
import { apiYoutubePlayList, apiYoutubeVideo } from '../api/youtube';
import Play from '../components/Play';


function PlayContainer(props) {
    const [video, setVideo] = useState();
    let urlYoutube = JSON.parse(sessionStorage.getItem(".config-url"));

    useEffect(() => {
        switch (urlYoutube.type) {
            case "video":
                apiYoutubeVideo(urlYoutube.id, (data) => {
                    let items = [...data.items];
                    items[0].contentDetails.videoId = items[0].id;
                    setVideo(items);
                })
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

    function handleDeleteVideo(index) {
        let handleVideo = [...video];
        handleVideo.splice(index, 1);
        setVideo(handleVideo);
    }

    return (
        <Play type={urlYoutube.type} fullScreen={props.fullScreen} video={video ? video : null} handleDeleteVideo={handleDeleteVideo}></Play>
    );
}

export default PlayContainer;
