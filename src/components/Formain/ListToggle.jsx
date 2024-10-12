// src/components/ListToggle.js
import React, { useState } from 'react';
import '../../styles/login-style.css'; // ListToggle 스타일 분리

const ListToggle = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleList = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <button
      className={`toggle-list ${isCollapsed ? 'collapsed-toggle' : ''}`}
      onClick={toggleList}
    >
      {isCollapsed ? '▶' : '◀'}
    </button>
  );
};

export default ListToggle;
