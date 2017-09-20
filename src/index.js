import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getGif from './components/getGif';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App getGif={getGif} />,
  document.getElementById('root')
);
registerServiceWorker();
