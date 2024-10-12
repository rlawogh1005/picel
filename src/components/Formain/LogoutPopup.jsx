// src/components/LogoutPopup.js
import React from 'react';
import '../../styles/login-style.css'; // LogoutPopup 스타일 분리

const LogoutPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>Do you want to log out?</p>
        <button className="confirm-logout" onClick={onConfirm}>Log Out</button>
        <button className="cancel-logout" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default LogoutPopup;
