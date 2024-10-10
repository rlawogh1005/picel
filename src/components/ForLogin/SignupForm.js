// src/components/SignupForm.js
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import '../../styles/login-style.css';
import { AuthContext } from '../../context/AuthContext';
import confirmLight from '../../assets/images/confirm_light.svg'; // 이미지 임포트
import xLight from '../../assets/images/x_light.svg'; // 이미지 임포트

function SignupForm({ toggleAuthMode }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isMatched, setIsMatched] = useState(false);
  const { signup, error, loading } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setIsMatched(password === confirmPassword && password.length > 0);
  }, [password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isMatched) {
      try {
        await signup({ username, password, email });
        // 회원가입 성공 시 MainPage로 자동 전환 (App.js에서 처리)
      } catch (err) {
        // 에러는 AuthContext에서 관리
      }
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div id="signup-section">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <h6>Username</h6>
        <div className="input-container">
          <input
            className="username"
            type="text"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
          <button
            type="button"
            className="username-check"
            onClick={() => alert('Username Check 기능 추가')}
            disabled={loading}
          >
            Check
          </button>
        </div>
        <h6>Email</h6>
        <div className="input-container">
          <input
            className="email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
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
            disabled={loading}
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
            disabled={loading}
          />
          {password.length > 0 && (
            isMatched ? (
              <img src={confirmLight} alt="Confirm" className="icon confirm-icon" />
            ) : (
              <img src={xLight} alt="X" className="icon x-icon" />
            )
          )}
        </div>
        {error && <div className="error-message">{error}</div>}
        <input type="submit" className="btn main-btn" value="Sign Up" disabled={!isMatched || loading} />
        <div className="line"></div>
        <button type="button" className="btn sub-btn" onClick={toggleAuthMode} disabled={loading}>
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
