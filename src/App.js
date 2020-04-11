import React, { useState, useEffect } from 'react';
import './style.scss';
import HomeContainer from './container/HomeContainer';
import PlayContainer from './container/PlayContainer';
import ControlContainer from './container/ControlContainer';

function App() {
  const [urlYoutube, setUrlYoutube] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    setUrlYoutube(sessionStorage.getItem(".config-url"));
  }, [])

  return (
    <div>
      {!fullScreen ? <ControlContainer></ControlContainer> : null}
      {urlYoutube ?
        <PlayContainer fullScreen={(status) => setFullScreen(status)}></PlayContainer> :
        <HomeContainer></HomeContainer>}
    </div>
  );
}

export default App;
