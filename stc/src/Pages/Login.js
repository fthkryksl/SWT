import logo from '../img/STC-01.png';
import '../css/Login.css';

export default function Login() {
    return (
        <div id="page">
            <div id="mainFrame">
                <img src={logo} id="logo" alt="Firmenlogo" />
                <h1 id="title">SSO Login</h1>
                <form action="" id="loginInput">
                    <input type="email" name="E-Mail Adresse" placeholder="E-Mail Adresse" required />
                    <input type="password" name="Password" placeholder="Passwort" required autoComplete="off" />
                    <input type="submit" id="submit" value="Login " />
                </form>
                <a href="#" id="forget">Forget password?</a>
            </div>
        </div>
    );
}