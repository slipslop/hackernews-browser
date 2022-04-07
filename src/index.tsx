import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './styles/index.css';
import { StoryListing } from './StoryListing';
import { Story } from './Story/Story';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoryListing/>}></Route>
          <Route path="/story/:id" element={<Story/>}></Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
