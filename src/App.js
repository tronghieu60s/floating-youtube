import React, { useState, useEffect } from 'react';
import './style.scss';
import { DarkMode, LightMode } from './Theme';

import HomeContainer from './container/HomeContainer';
import PlayContainer from './container/PlayContainer';
import ControlContainer from './container/ControlContainer';

function App() {
  let st = JSON.parse(localStorage.getItem(".config-st")) || {};
  const [urlYoutube, setUrlYoutube] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => st.darkMode || false);

  useEffect(() => {
    setUrlYoutube(sessionStorage.getItem(".config-url"));
  }, [])

  return (
    <div>
      {darkMode ? <DarkMode></DarkMode> : <LightMode></LightMode>}
      {!fullScreen ? <ControlContainer
        darkMode={darkMode}
        setDarkMode={(mode) => {
          setDarkMode(mode);
          st['darkMode'] = mode;
          localStorage.setItem(".config-st", JSON.stringify(st));
        }}>
      </ControlContainer> : null}
      {urlYoutube ?
        <PlayContainer fullScreen={(status) => setFullScreen(status)}></PlayContainer> :
        <HomeContainer></HomeContainer>}
    </div>
  );
}

export default App;
