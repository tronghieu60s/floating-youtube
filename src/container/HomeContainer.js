import React, { useState } from 'react';
import Home from '../components/Home';
import { splitUrlYoutube } from '../support';

const electron = window.require('electron');

function HomeContainer() {
  var window = electron.remote.getCurrentWindow();
  const [urlYoutube, setUrlYoutube] = useState();
  const [error, setError] = useState({status: false, alert: ""});

  function handleSubmit() {
    splitUrlYoutube(urlYoutube, (data) => {
      if (data.type !== 'error') {
        sessionStorage.setItem(".config-url", JSON.stringify(data));
        window.reload();
      }else setError({status: true, alert: "URL không xác định được. Bạn vui lòng kiểm tra lại."})
    });
  }

  return (
    <Home
      error={error}
      urlYoutube={urlYoutube}
      handleSubmit={handleSubmit}
      onChange={(event) => setUrlYoutube(event.target.value)}>
    </Home>
  );
}

export default HomeContainer;
