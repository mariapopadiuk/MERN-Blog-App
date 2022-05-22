import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './view/Main';
import Login from './view/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/view/id=:id" element={<MoviePreview />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
