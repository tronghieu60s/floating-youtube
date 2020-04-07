import React from 'react';
import playIcon from './icons/play.svg';
import deleteIcon from './icons/delete.svg';
import useAxios from 'axios-hooks';
import { apiYoutubeVideoObj } from '../api/youtube';

function PlayListItem(props) {
    const [{ data }] = useAxios(apiYoutubeVideoObj(props.item))
    let snippet = data ? data.items[0].snippet : {
        title: "",
        channelTitle: "",
        thumbnails: { default: "", maxres: "" }
    };

    function backgroundImage() {
        if (snippet.thumbnails.maxres) return snippet.thumbnails.maxres.url;
        else if (snippet.thumbnails.standard) return snippet.thumbnails.standard.url;
        else if (snippet.thumbnails.high) return snippet.thumbnails.high.url;
        else if (snippet.thumbnails.medium) return snippet.thumbnails.medium.url;
        else return snippet.thumbnails.default.url;
    };

    let videoTitle = snippet.title.length > 60 ? snippet.title.slice(0, 60) + "..." : snippet.title;

    return (
        <div className={`playlist-video ${props.videoRun ? "active" : ""}`}>
            {props.videoRun ? <img className="playlist-video-play" src={playIcon} alt="" /> : null}
            <div className="playlist-video-img" style={{ backgroundImage: `url(${backgroundImage()})` }}></div>
            <div className="playlist-video-content">
                <h4 onClick={props.handleSetVideo} className="playlist-video-title">{videoTitle}</h4>
                <div className="playlist-video-author">{snippet.channelTitle}</div>
            </div>
            <img onClick={props.handleDeleteVideo} className={`playlist-video-delete ${props.videoRun ? " active" : ""}`} src={deleteIcon} alt="" />
        </div>
    )
}

export default PlayListItem;