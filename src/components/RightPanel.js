// src/components/RightPanel.js
import React, { useState } from 'react';
import '../styles/login-style.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function RightPanel() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => setIsLogin((prev) => !prev);

  return (
    <div className="right-panel">
      {isLogin ? <LoginForm toggleAuthMode={toggleAuthMode} /> : <SignupForm toggleAuthMode={toggleAuthMode} />}
    </div>
  );
}

export default React.memo(RightPanel);