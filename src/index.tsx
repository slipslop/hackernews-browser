import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ArticleListing } from './ArticleListing';

ReactDOM.render(
  <React.StrictMode>
    <ArticleListing />
  </React.StrictMode>,
  document.getElementById('root')
);
