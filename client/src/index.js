import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './view/Main';
import Login from './view/Login';
import ItemPreview from './view/ItemPreview';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/itempreview/id=:id" element={<ItemPreview />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
