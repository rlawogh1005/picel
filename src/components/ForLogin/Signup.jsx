// src/components/ForLogin/Signup.jsx
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import '../../styles/login-style.css';
import { AuthContext } from '../../context/AuthContext.jsx';
import confirmLight from '../../assets/images/confirm_light.svg'; // 이미지 임포트
import xLight from '../../assets/images/x_light.svg'; // 이미지 임포트

function SignupForm({ toggleAuthMode }) {
    const { signup } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        user_name: '',
        id: '',
        password: '',
        email: '',
        nick_name: '',
    });
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(formData);
        } catch (err) {
            // 에러 처리는 AuthContext에서 관리
        }
    };

    return (
        <div id="signup-section">
          <h2>SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            <h6>Username</h6>
            <div className="input-container">
              <input
                className="user_name"
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
              />
              <br />
            </div>
            <h6>Userid</h6>
            <div className="input-container">
              <input
                className="id"
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
              <br />
            </div>
            <h6>Password</h6>
            <div className="input-container">
              <input
                className="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <br />
            </div>
            <h6>Email</h6>
            <div className="input-container">
              <input
                className="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <br />
            </div>
            <h6>닉네임</h6>
            <div className="input-container">
              <input
                className="nick_name"
                type="text"
                name="nick_name"
                value={formData.nick_name}
                onChange={handleChange}
              />
              <br />
            </div>
            <input type="submit" className="btn main-btn" value="Sign Up" />
            <div className="line"></div>
            <button className="btn sub-btn" onClick={toggleAuthMode}>
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