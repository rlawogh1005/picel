// src/components/ForLogin/RightPanel.jsx
import React, { useState } from 'react';
import LoginForm from './Login.jsx';
import SignupForm from './Signup.jsx';
import '../../styles/login-style.css';

const RightPanel = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => setIsLogin((prev) => !prev);

  return (
    <div className="right-panel">
      {isLogin ? (
        <LoginForm toggleAuthMode={toggleAuthMode} />
      ) : (
        <SignupForm toggleAuthMode={toggleAuthMode} />
      )}
    </div>
  );
};

export default React.memo(RightPanel);
