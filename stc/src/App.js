import logo from './img/STC-01.png';
import './App.css';
import Login from './Pages/Login.js';
import MainPage from'./Pages/MainPage.js';

import { React } from 'react';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
