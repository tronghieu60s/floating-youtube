import React, { useState } from 'react';
import Home from '../components/Home';
import { splitUrlYoutube } from '../support';

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
    let history = JSON.parse(localStorage.getItem(".history-url")) || [];
    splitUrlYoutube(urlYoutube, (data) => {
      if (data.type !== 'error') {
        sessionStorage.setItem(".config-url", JSON.stringify(data));
        if (history.length === 5) history.slice(4, 1);
        history.push(data);
        localStorage.setItem(".history-url", JSON.stringify(history));
        window.reload();
      } else setError({ status: true, alert: "The URL is unknown. Please check again." })
    });
  }

  return (
    <Home
      error={error}
      urlYoutube={urlYoutube}
      history={history}
      handleSubmit={handleSubmit}
      removeAlert={()=>setError({ status: false, alert: "" })}
      setUrlYoutube={(index) => setUrlYoutube(history.type === 'video' ?
        `https://www.youtube.com/watch?v=${history[index].id}` :
        `https://www.youtube.com/playlist?list=${history[index].id}`)}
      onChange={(event) => setUrlYoutube(event.target.value)}>
    </Home>
  );
}

export default HomeContainer;
