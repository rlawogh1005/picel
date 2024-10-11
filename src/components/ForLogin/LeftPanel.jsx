// src/components/ForLogin/LeftPanel.jsx
import React from 'react';
import PropTypes from 'prop-types';
import lightImage from '../../assets/images/light.svg'; // 이미지 임포트
import darkImage from '../../assets/images/dark.svg';   // 이미지 임포트
import '../../styles/login-style.css';

function LeftPanel({ toggleTheme, theme }) {
  return (
    <div className="left-panel">
      <h1>PICEL</h1>
      <h2>Platform for<br />Interpreting and<br />Connecting<br />Every<br />Language</h2>
      <br />
      <div className="toggle-switch">
        <label className="switch">
          <input
            type="checkbox"
            id="mode-toggle"
            onChange={toggleTheme}
            checked={theme === 'dark'}
          />
          <span className="slider">
            <img src={lightImage} alt="Light" className="light-image" />
            <img src={darkImage} alt="Dark" className="dark-image" />
          </span>
        </label>
      </div>
    </div>
  );
}

LeftPanel.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default React.memo(LeftPanel);
