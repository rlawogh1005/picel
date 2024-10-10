// src/components/SignupForm.js
import React, { useState, useEffect } from 'react';

function SignupForm({ showLogin }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    setIsMatched(password === confirmPassword && password.length > 0);
  }, [password, confirmPassword]);

  return (
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
          <input
            className="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        </div>
        <h6>Confirm Password</h6>
        <div className="input-container">
          <input
            className="confirm-password"
            type="password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {password.length > 0 && (
            isMatched ? (
              <img src="assets/images/confirm_light.svg" alt="Confirm" className="icon confirm-icon" />
            ) : (
              <img src="assets/images/x_light.svg" alt="X" className="icon x-icon" />
            )
          )}
        </div>
        <input type="submit" className="btn main-btn" value="Sign Up" />
        <div className="line"></div>
        <button className="btn sub-btn" onClick={showLogin}>
          Back to Login
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
