import React from 'react';

const LogoutPopup = ({ onConfirm, onCancel }) => (
  <div className="popup">
    <div className="popup-content">
      <p>Do you want to log out?</p>
      <button onClick={onConfirm}>Log Out</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  </div>
);

export default LogoutPopup;