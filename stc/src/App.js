import logo from './img/STC-01.png';
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

/*PAGES*/
import Login from './Pages/Login.js';
import MainPage from './Pages/MainPage.js';
import VacationManagement from './Pages/VacationManagement.js';
import WorkApproval from './Pages/WorkApproval.js';
import FlexTime from './Pages/FlexTime.js';
import Help from './Pages/Help.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
    if (storedLoggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={isLoggedIn ? <Navigate to="/MainPage" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/MainPage" element={isLoggedIn ? <MainPage /> : <Navigate to="/" />} />
          <Route path="/VacationManagement" element={isLoggedIn ? <VacationManagement /> : <Navigate to="/" />} />
          <Route path="/FlexTime" element={isLoggedIn ? <FlexTime /> : <Navigate to="/" />} />
          <Route path="/WorkApproval" element={isLoggedIn ? <WorkApproval /> : <Navigate to="/" />} />
          <Route path="/Help" element={isLoggedIn ? <Help /> : <Navigate to="/" />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
