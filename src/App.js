import React from 'react';
import Home from './components/Home';
import Play from './components/Play';

const electron = window.require('electron');

function App() {
  var window = electron.remote.getCurrentWindow();
  return (
    <div className="App">
      <Home></Home>
      <Play></Play>
    </div>
  );
}

export default App;
