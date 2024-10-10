// src/App.js
import React, { useState, useEffect } from 'react';
import './styles/App.css';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="container">
      <LeftPanel toggleTheme={toggleTheme} theme={theme} />
      <RightPanel />
    </div>
  );
}

export default App;
