// src/App.js
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import { AuthProvider, AuthContext } from './context/AuthContext';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import LogoutPopup from './components/Formain/LogoutPopup';
import './styles/login-style.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

const AppContent = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogoutClick = () => setShowLogoutPopup(true);
  const confirmLogout = () => {
    logout();
    setShowLogoutPopup(false);
  };
  const cancelLogout = () => setShowLogoutPopup(false);

  return (
    <div className={`app-container`} data-theme={theme}>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/main" /> : <AuthPage />}/>
        <Route path="/main" element={ isAuthenticated ? (
              <>
                <MainPage onLogoutClick={handleLogoutClick} />
                {showLogoutPopup && (
                  <LogoutPopup onConfirm={confirmLogout} onCancel={cancelLogout} />
                )}
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
