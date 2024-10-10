// src/components/RightPanel.js
import React, { useState } from 'react';
import '../styles/RightPanel.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function RightPanel() {
  const [isLogin, setIsLogin] = useState(true);

  const showSignup = () => setIsLogin(false);
  const showLogin = () => setIsLogin(true);

  return (
    <div className="right-panel">
      {isLogin ? <LoginForm showSignup={showSignup} /> : <SignupForm showLogin={showLogin} />}
    </div>
  );
}

export default RightPanel;
