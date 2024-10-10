// src/pages/AuthPage.js
import React, { useContext } from 'react';
import LeftPanel from '../components/ForLogin/LeftPanel';
import RightPanel from '../components/ForLogin/RightPanel';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/login-style.css';

const AuthPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="auth-page">
      <LeftPanel toggleTheme={toggleTheme} theme={theme} />
      <RightPanel />
    </div>
  );
};

export default AuthPage;
