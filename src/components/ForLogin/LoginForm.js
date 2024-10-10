// src/components/LoginForm.js
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import '../../styles/login-style.css';
import { AuthContext } from '../../context/AuthContext';

function LoginForm({ toggleAuthMode }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login, error, loading } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePassword = () => setPasswordVisible((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ username, password });
      // 로그인 성공 시 MainPage로 자동 전환 (App.js에서 처리)
    } catch (err) {
      // 에러는 AuthContext에서 관리
    }
  };

  return (
    <div id="login-section">
      <h2>WELCOME</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            className="username"
            type="text"
            name="username"
            placeholder="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="input-container">
          <input
            className="password"
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={togglePassword}
            disabled={loading}
          >
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
        <input type="submit" className="btn main-btn" value="Log In" disabled={loading} />
      </form>
      <div className="line or">
        <span className="line-text">or</span>
      </div>
      <button type="button" className="btn sub-btn" onClick={toggleAuthMode} disabled={loading}>
        Sign Up
      </button>
    </div>
  );
}

LoginForm.propTypes = {
  toggleAuthMode: PropTypes.func.isRequired,
};

export default LoginForm;
