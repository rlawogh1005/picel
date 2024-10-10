import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/login-style.css';

function LoginForm({ toggleAuthMode }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => setPasswordVisible((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle login logic here
  };

  return (
    <div id="login-section">
      <h2>WELCOME</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input className="username" type="text" name="username" placeholder="username" required />
        </div>
        <div className="input-container">
          <input
            className="password"
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            placeholder="password"
            required
          />
          <button type="button" className="toggle-password" onClick={togglePassword}>
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
        </div>
        <input type="submit" className="btn main-btn" value="Log In" />
      </form>
      <div className="line or">
        <span className="line-text">or</span>
      </div>
      <button type="button" className="btn sub-btn" onClick={toggleAuthMode}>
        Sign Up
      </button>
    </div>
  );
}

LoginForm.propTypes = {
  toggleAuthMode: PropTypes.func.isRequired,
};

export default LoginForm;