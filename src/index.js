import React from 'react';
import ReactDOM from 'react-dom';
import FullPost from './FullPost';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <FullPost />
  </React.StrictMode>,
  document.getElementById('root')
);
