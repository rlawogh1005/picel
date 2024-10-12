// src/components/LogoutPopup.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/login-style.css';

const LogoutPopup = ({ onConfirm, onCancel }) => (
  <div className="popup">
    <div className="popup-content">
      <p>Do you want to log out?</p>
      <button onClick={onConfirm} className="btn main-btn">Log Out</button>
      <button onClick={onCancel} className="btn sub-btn">Cancel</button>
    </div>
  </div>
);

LogoutPopup.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default LogoutPopup;
