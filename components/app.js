import React, { useState } from 'react';
import { ipcRenderer } from 'electron-better-ipc';

const ipc = ipcRenderer;

const App = () => {
  const ping = async e => {
    e.preventDefault();
    const res = await ipc.callMain('ping', 'mereq');
    console.log(res);
  }
  return (
    <div>
      <button onClick={ping}>ping app</button>
    this is a react app! haha, test me!
    </div>)
}

export default App;