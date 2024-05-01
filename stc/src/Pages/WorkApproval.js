import logo from '../img/STC-01.png';
import '../css/Work Approval.css';

export default function WorkApproval() {
    return (
        <div id="page">
            <div id="mainFrame">
                <img src={logo} id="logo" alt="Firmenlogo" />
                <h1 id="title">Work Hour Approval</h1>
                <div id="approvalTable">
                    <div className="headerRow">
                        <div className="column">Employee</div>
                        <div className="column">Hours Worked</div>
                        <div className="column">Approval Status</div>
                        <div className="column">Approve/Reject</div>
                    </div>
                    <div className="dataRow">
                        <div className="column">John Dayi</div>
                        <div className="column">40</div>
                        <div className="column">Pending</div>
                        <div className="column">
                            <button className="approveBtn">Approve</button>
                            <button className="rejectBtn">Reject</button>
                        </div>
                    </div>
                    <div className="dataRow">
                        <div className="column">Mike Amca</div>
                        <div className="column">38</div>
                        <div className="column">Pending</div>
                        <div className="column">
                            <button className="approveBtn">Approve</button>
                            <button className="rejectBtn">Reject</button>
                        </div>
                    </div>
                    <div className="dataRow">
                        <div className="column">Michael Dede</div>
                        <div className="column">42.5</div>
                        <div className="column">Pending</div>
                        <div className="column">
                            <button className="approveBtn">Approve</button>
                            <button className="rejectBtn">Reject</button>
                        </div>
                    </div>
                    {/* Add more rows as needed */}
                </div>
            </div>
        </div>
    );
}
