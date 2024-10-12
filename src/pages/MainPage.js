// src/pages/MainPage.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/login-style.css';
import Navigation from '../components/Formain/Navigation';

const MainPage = ({ onLogoutClick }) => {
  return (
    <div className="main-page">
      <Navigation />
      <div className="main-content">
        <h1>메인 콘텐츠</h1>
        <button onClick={onLogoutClick} className="btn main-btn">로그아웃</button>
      </div>
    </div>
  );
};

MainPage.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
};

export default MainPage;
