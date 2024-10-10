import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/login-style.css';

function SignupForm({ toggleAuthMode }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    setIsMatched(password === confirmPassword && password.length > 0);
  }, [password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle signup logic here
  };

  return (
    <div id="signup-section">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <h6>Username</h6>
        <div className="input-container">
          <input className="username" type="text" name="username" required />
          <button type="button" className="username-check">Check</button>
        </div>
        <h6>Password</h6>
        <div className="input-container">
          <input
            className="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <h6>Confirm Password</h6>
        <div className="input-container">
          <input
            className="confirm-password"
            type="password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
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
        <button type="button" className="btn sub-btn" onClick={toggleAuthMode}>
          Back to Login
        </button>
      </form>
    </div>
  );
}

SignupForm.propTypes = {
  toggleAuthMode: PropTypes.func.isRequired,
};

export default SignupForm;