import React, { useState } from 'react';
import Home from '../components/Home';
import { splitUrlYoutube } from '../support';
import { apiYoutubeVideo, apiYoutubePlayList } from '../api/youtube';

const electron = window.require('electron');

function HomeContainer() {
  var window = electron.remote.getCurrentWindow();
  const [urlYoutube, setUrlYoutube] = useState();
  const [history] = useState(() => {
    let history = JSON.parse(localStorage.getItem(".history-url")) || [];
    return history.reverse();
  })
  const [error, setError] = useState({ status: false, alert: "" });

  function handleSubmit() {
    splitUrlYoutube(urlYoutube, (data) => {
      switch (data.type) {
        case "video":
          apiYoutubeVideo(data.id, (video) =>
            video.items.length === 0 ?
              setError({ status: true, alert: "Unable to find this video. Please check again." }) :
              configDataVideo(data, data.type));
          break;
        case "playlist":
          apiYoutubePlayList(data.id, 10, (playlist) =>
            playlist === "error" ?
              setError({ status: true, alert: "Unable to find this playlist. Please check again." }) :
              configDataVideo(data, data.type));
          break;
        default:
          setError({ status: true, alert: "The URL is unknown. Please check again." })
          break;
      }
    });
  }

  function configDataVideo(data, type) {
    let historyStorage = JSON.parse(localStorage.getItem(".history-url")) || [];
    sessionStorage.setItem(".config-url", JSON.stringify(data));

    if (historyStorage.indexOf(urlYoutube) === -1) {
      if (historyStorage.length >= 5)
        historyStorage = historyStorage.slice(1);
      historyStorage.push({videoURL: urlYoutube, type});
      localStorage.setItem(".history-url", JSON.stringify(historyStorage));
    }
    window.reload();
  }

  return (
    <Home
      error={error}
      urlYoutube={urlYoutube}
      history={history}
      handleSubmit={handleSubmit}
      removeAlert={() => setError({ status: false, alert: "" })}
      setUrlYoutube={(index) => setUrlYoutube(history[index])}
      onChange={(event) => setUrlYoutube(event.target.value)}>
    </Home>
  );
}

export default HomeContainer;
