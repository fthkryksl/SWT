import logo from '../img/STC-01.png';
import '../css/MainPage.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Hier kann man den Code platzieren, der beim Laden der Komponente ausgeführt werden soll
    }, []); // Leeres Abhängigkeitsarray bedeutet, dass der Effekt nur einmal beim Laden der Komponente ausgeführt wird

    const toNavigate = (pageName) => {
        navigate(pageName);
    }

    return (
        <div id="page">
            <div id="mainFrame">
                <img src={logo} alt="Firmenlogo" id="logo" />
                <div id="table">
                    <div className="rows">
                        <button onClick={() => toNavigate("/TimeTracking")} className="item">
                            <span className="material-symbols-outlined">schedule</span>
                            <p className="itemName" id="1">Time Tracking</p>
                        </button>
                        <button onClick={() => toNavigate("/VacationManagement")} className="item">
                            <span className="material-symbols-outlined">flight_takeoff</span>
                            <p className="itemName" id="2">Vacation Management</p>
                        </button>
                        <button onClick={() => toNavigate("/SickLeaving")} className="item">
                            <span className="material-symbols-outlined">note_add</span>
                            <p className="itemName" id="3">Sick Leaving</p>
                        </button>
                    </div>
                    <div className="rows">
                        <button onClick={() => toNavigate("/FlexTime")} className="item">
                            <span className="material-symbols-outlined">history</span>
                            <p className="itemName" id="4">Flex Time Management</p>
                        </button>
                        <button onClick={() => toNavigate("/WorkApproval")} className="item">
                            <span className="material-symbols-outlined">construction</span>
                            <p className="itemName" id="5">Work Hour Approval</p>
                        </button>
                        <button onClick={() => toNavigate("/Help")} className="item">
                            <span className="material-symbols-outlined">help</span>
                            <p className="itemName" id="6">Help</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
