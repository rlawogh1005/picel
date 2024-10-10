// src/components/LoginForm.js
import React, { useState } from 'react';

function LoginForm({ showSignup }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => setPasswordVisible(!passwordVisible);

  return (
    <div id="login-section">
      <h2>WELCOME</h2>
      <form>
        <div className="input-container">
          <input className="username" type="text" name="username" placeholder="username" />
          <br />
        </div>
        <div className="input-container">
          <input
            className="password"
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            placeholder="password"
          />
          <button type="button" className="toggle-password" onClick={togglePassword}>
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
          <br />
        </div>
        <input type="submit" className="btn main-btn" value="Log In" />
      </form>
      <br />
      <div className="line or">
        <span className="line-text">or</span>
      </div>
      <br />
      <button className="btn sub-btn" onClick={showSignup}>
        Sign Up
      </button>
    </div>
  );
}

export default LoginForm;
