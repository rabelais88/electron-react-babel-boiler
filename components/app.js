import React, { useState } from 'react';
import { ipcRenderer } from 'electron-better-ipc';

const ipc = ipcRenderer;

const App = () => {
  const [ipcRes, setIpcRes] = useState('');
  const ping = async e => {
    e.preventDefault();
    const res = await ipc.callMain('ping', 'mereq');
    setIpcRes(res)
    return null;
  }
  return pug`
    div
      button(onClick=${ping}) get the ping!
      p this is react app!
      p ${ipcRes}
  `
}

export default App;