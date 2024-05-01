import logo from '../img/STC-01.png';
import '../css/VacationManagement.css';

export default function VacationManagement() {
    return (
        <div id="page">
            <div id="mainFrame">
                <div id="top">
                    <img src={logo} alt="Firmenlogo" id="logo" />
                    <h1>Vacation Management</h1>
                </div>
                <div className="table">
                    <div className="table-row">
                        <div className="table-cell">
                        <span class="material-symbols-outlined">person</span>
                        </div>
                        <form className="table-cell">
                            <input type="text" autoComplete='true' required placeholder='Name' />
                            <input type="text" autoComplete='true' required placeholder='Birthday' />
                            <input type="text" autoComplete='true' required placeholder='ID' />
                            <input type="text" autoComplete='true' required placeholder='Area' />
                        </form>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">
                        <span class="material-symbols-outlined">person</span>
                        </div>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">
                        <span class="material-symbols-outlined">person</span>
                        </div>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                        <form className="table-cell">
                            <input type="text" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}