import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css';
import { ArticleListing } from './ArticleListing';
import { Article } from './Article/Article';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArticleListing/>}></Route>
          <Route path="/article/:id" element={<Article/>}></Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
