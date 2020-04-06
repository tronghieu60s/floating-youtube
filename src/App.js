import React, { useState, useEffect } from 'react';
import HomeContainer from './container/HomeContainer';
import PlayContainer from './container/PlayContainer';

function App() {
  const [urlYoutube, setUrlYoutube] = useState(null);
  useEffect(() => {
    setUrlYoutube(sessionStorage.getItem(".config-url"));
  }, [])

  return (
    <div>
      {urlYoutube ?
        <PlayContainer></PlayContainer> :
        <HomeContainer></HomeContainer>}
    </div>
  );
}

export default App;
