import React, { useState, useEffect } from 'react';
import NoticePopup from '../components/NoticePopup';
import LogoutPopup from '../components/LogoutPopup';
import Navigation from '../components/Navigation';
import { formatDate, formatTime } from '../utils/dateUtils';
import '../style.css';

const Main = () => {
  const [showNoticePopup, setShowNoticePopup] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    setDate(formatDate(new Date()));

    const updateClock = () => {
      setTime(formatTime(new Date()));
    };

    updateClock();
    const timer = setInterval(updateClock, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleNoticeClick = () => {
    setShowNoticePopup(!showNoticePopup);
  };

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
  };

  const handleConfirmLogout = () => {
    setShowLogoutPopup(false);
    alert('Logged out!');
  };

  return (
    <div className="container">
      {/* Popup for Logout Confirmation */}
      {showLogoutPopup && <LogoutPopup onConfirm={handleConfirmLogout} onCancel={handleCancelLogout} />}

      {/* Notice Popup */}
      {showNoticePopup && <NoticePopup />}

      {/* Main Navigation */}
      <Navigation date={date} time={time} onNoticeClick={handleNoticeClick} />

      {/* Content Sections (example placeholder) */}
      <div className="content">
        <section id="friend" className="content-section">
          {/* Friend content goes here */}
        </section>
        <section id="chat" className="content-section">
          {/* Chat content goes here */}
        </section>
        <section id="setting" className="content-section">
          {/* Setting content goes here */}
        </section>
      </div>
    </div>
  );
};

export default Main;