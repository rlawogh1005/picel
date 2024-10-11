import React, { useState } from 'react';
import '../../styles/login-style.css';

function RightPanel() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => setIsLogin((prev) => !prev);

  const togglePassword = (e) => {
    const passwordField = e.target.previousElementSibling;
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  };

  const showSignup = () => setIsLogin(false);
  const showLogin = () => setIsLogin(true);

  return (
    <div className="right-panel">
      {isLogin ? (
        <div id="login-section">
          <h2>WELCOME</h2>
          <form>
            <div className="input-container">
              <input className="username" type="text" name="username" placeholder="username" />
              <br />
            </div>
            <div className="input-container">
              <input className="password" type="password" name="password" placeholder="password" />
              <button type="button" className="toggle-password" onClick={togglePassword}>Show</button>
              <br />
            </div>
            <input type="submit" className="btn main-btn" value="Log In" />
          </form>
          <br />
          <div className="line or">
            <span className="line-text">or</span>
          </div>
          <br />
          <button className="btn sub-btn" onClick={showSignup}>Sign Up</button>
        </div>
      ) : (
        <div id="signup-section">
          <h2>SIGN UP</h2>
          <form>
            <h6>Username</h6>
            <div className="input-container">
              <input className="username" type="text" name="username" />
              <button type="button" className="username-check">Check</button>
              <br />
            </div>
            <h6>Password</h6>
            <div className="input-container">
              <input className="password" type="password" name="password" />
              <br />
            </div>
            <h6>Confirm Password</h6>
            <div className="input-container">
              <input className="confirm-password" type="password" name="confirm-password" />
              <img src="../image/confirm_light.svg" alt="Confirm" className="icon confirm-icon" style={{ display: 'none' }} />
              <img src="../image/x_light.svg" alt="X" className="icon x-icon" style={{ display: 'none' }} />
            </div>
            <input type="submit" className="btn main-btn" value="Sign Up" />
            <div className="line"></div>
            <button className="btn sub-btn" onClick={showLogin}>Back to Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default React.memo(RightPanel);
