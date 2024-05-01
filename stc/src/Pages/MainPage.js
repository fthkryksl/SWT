import logo from '../img/STC-01.png';
import '../css/MainPage.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



export default function MainPage() {
    return (
        <div id="page">
            <div id="mainFrame">
                <img src={logo} alt="Firmenlogo" id="logo" />
                <BrowserRouter>
                <Routes>
                    <Route path='/' element={()=>{}} className="item" >
                                <span class="material-symbols-outlined">schedule</span>
                                <p className="itemName" id="1">Time Tracking</p></Route>
                    <Route path='/' element={()=>{}} >
                                <span class="material-symbols-outlined">flight_takeoff</span>
                                <p className="itemName" id="2">Vacation Management</p></Route>
                    <Route path='/' element={()=>{}} />
                    <Route path='/' element={()=>{}} />
                    <Route path='/' element={()=>{}} />
                    <Route path='/' element={()=>{}} />
                    <div id="table">
                        <div className="rows">
                            <a href="#" className="item">
                                <span class="material-symbols-outlined">schedule</span>
                                <p className="itemName" id="1">Time Tracking</p>
                            </a>
                            <a href='VacationManagement' className="item" onClick={console.log("TEST")}>
                                <span class="material-symbols-outlined">flight_takeoff</span>
                                <p className="itemName" id="2">Vacation Management</p>
                            </a>
                            <a href="#" className="item">
                                <span class="material-symbols-outlined">note_add</span>
                                <p className="itemName" id="3">Sick Leaving</p>
                            </a>
                        </div>
                        <div className="rows">
                            <a href="#" className="item">
                                <span class="material-symbols-outlined">history</span>
                                <p className="itemName" id="4">Flex Time Management</p>
                            </a>
                            <a href="#" className="item">
                                <span class="material-symbols-outlined">construction</span>
                                <p className="itemName" id="5">Work Hour Approval</p>
                            </a>
                            <a href="#" className="item">
                                <span class="material-symbols-outlined">help</span>
                                <p className="itemName" id="6">Help</p>
                            </a>
                        </div>
                    </div>
                    </Routes>
                    </BrowserRouter>
            </div>
        </div>
    );
}