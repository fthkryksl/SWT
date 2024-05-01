import logo from '../img/STC-01.png';
import '../css/FlexTime.css';

export default function FlexTime() {
    return (
        <div id="page">
            <div id="mainFrame">
                <img src={logo} id="logo" alt="Firmenlogo" />
                <h1 id="title">Flex Time Management</h1>
                
                {/* Flex Time Antrag */}
                <form id="flexTimeForm">
                    <input type="text" name="Employee Name" placeholder="Employee Name" required />
                    <input type="date" name="Date" placeholder="Date" required />
                    <input type="time" name="Start Time" placeholder="Start Time" required />
                    <input type="time" name="End Time" placeholder="End Time" required />
                    <textarea name="Reason" placeholder="Reason for Flex Time" rows="4" required></textarea>
                    <input type="submit" id="submit" value="Submit Request" />
                </form>

                {/* Liste bestehender Flex Time Anträge */}
                <div id="flexTimeList">
                    <h2>Existing Flex Time Requests</h2>
                    <div className="request">
                        <p><strong>Employee:</strong> John Doe</p>
                        <p><strong>Date:</strong> 2024-05-01</p>
                        <p><strong>Start Time:</strong> 09:00</p>
                        <p><strong>End Time:</strong> 13:00</p>
                        <p><strong>Reason:</strong> Medical appointment</p>
                    </div>
                    {/* Weitere Anträge können hier hinzugefügt werden */}
                </div>
            </div>
        </div>
    );
}
