// src/components/LeftPanel.js
import React from 'react';
import '../styles/LeftPanel.css';

function LeftPanel({ toggleTheme, theme }) {
  return (
    <div className="left-panel">
      <h1>PICEL</h1>
      <h2>
        Platform for<br />Interpreting and<br />Connecting<br />Every<br />Language
      </h2>
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
            <img src="assets/images/light.svg" alt="Light" className="light-image" />
            <img src="assets/images/dark.svg" alt="Dark" className="dark-image" />
          </span>
        </label>
      </div>
    </div>
  );
}

export default LeftPanel;
