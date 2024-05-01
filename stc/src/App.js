import logo from './img/STC-01.png';
import './App.css';
import Login from './Pages/Login.js';
import MainPage from './Pages/MainPage.js';
import VacationManagement from './Pages/VacationManagement.js';
import WorkApproval from './Pages/Work Approval.js';
import FlexTime from './Pages/FlexTime.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/VacationManagement" element={<VacationManagement />} />
          <Route path="/FlexTime" element={<FlexTime />} />
          <Route path="/WorkApproval" element={<WorkApproval />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
