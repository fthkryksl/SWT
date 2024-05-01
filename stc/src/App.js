import logo from './img/STC-01.png';
import './App.css';

/*PAGES*/
import Login from './Pages/Login.js';
import MainPage from './Pages/MainPage.js';

import { React, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VacationManagement from './Pages/VacationManagement.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="/MainPage" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
