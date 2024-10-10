import React, { useState, useEffect } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="container">
      <LeftPanel toggleTheme={toggleTheme} theme={theme} />
      <RightPanel />
    </div>
  );
}

export default App;