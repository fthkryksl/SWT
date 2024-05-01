import logo from '../img/STC-01.png';
import '../css/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if(email === 'admin@admin.com' && password === 'admin') {
            console.log("Login successful");
            navigate("/MainPage");
        } else {
            console.log("Login failed");
            alert("Login failed");
        }
    }

    return (
        <div id="page">
            <div id="mainFrame">
                <img src={logo} id="logo" alt="Firmenlogo" />
                <h1 id="title">SSO Login</h1>
                <form id="loginInput">
                    <input type="email" name="E-Mail Adresse" placeholder="E-Mail Adresse" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    <input type="password" name="Password" placeholder="Passwort" value={password} onChange={(e)=>setPassword(e.target.value)} required autoComplete="off" />
                    <button type="button" id="submit" value="Login" onClick={handleLogin}>Submit</button>
                </form>
                <a href="#" id="forget">Forget password?</a>
            </div>
        </div>
    );
}
