// src/components/ForLogin/Login.jsx
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import '../../styles/login-style.css';
import { AuthContext } from '../../context/AuthContext.jsx';

function LoginForm({ toggleAuthMode }) {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({ id: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData);
        } catch (err) {
            // 에러 처리는 AuthContext에서 관리
        }
    };
    
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return(
        <div id="login-section">
          <h2>WELCOME</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                className="id"
                type="text"
                name="id"
                placeholder="id"
                value={formData.id}
                onChange={handleChange}
              />
              <br />
            </div>
            <div className="input-container">
              <input
                className="password"
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="button" className="toggle-password" onClick={togglePassword}>
                Show
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
          <button className="btn sub-btn" onClick={toggleAuthMode}>
            Sign Up
          </button>
        </div>
    )
}

LoginForm.propTypes = {
    toggleAuthMode: PropTypes.func.isRequired,
};

export default LoginForm;



