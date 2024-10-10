// src/App.js
import React, { useContext, useState } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext'; // 테마 Context (이미 설정된 경우)
import { AuthProvider, AuthContext } from './context/AuthContext';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import LogoutPopup from './components/LogoutPopup';
import './styles/login-style.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

const AppContent = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogoutClick = () => setShowLogoutPopup(true);
  const confirmLogout = () => { logout(); setShowLogoutPopup(false); };
  const cancelLogout = () => setShowLogoutPopup(false);

  return (
    <div className={`app-container ${theme}`}>
      {isAuthenticated ? (
        <>
          <MainPage onLogoutClick={handleLogoutClick} />
          {showLogoutPopup && <LogoutPopup onConfirm={confirmLogout} onCancel={cancelLogout} />}
        </>
      ) : (
        <AuthPage />
      )}
    </div>
  );
};

export default App;
