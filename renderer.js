// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import TestApp from './components/app';

const render = () => {
  ReactDOM.render(<AppContainer>
    <TestApp />
  </AppContainer>, document.getElementById('app'));
}

render();
if (module.hot) { module.hot.accept(render); }