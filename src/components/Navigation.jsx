// src/components/Navigation.jsx
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/AuthContext';
import LogoutPopup from './LogoutPopup';
import '../styles/login-style.css';

const Navigation = ({ onNoticeClick }) => {
  const { user, logout } = useContext(AuthContext);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleProfileClick = () => setShowLogoutPopup(true);
  const confirmLogout = () => { logout(); setShowLogoutPopup(false); };
  const cancelLogout = () => setShowLogoutPopup(false);

  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <nav className="gnb">
      <ul className="menu">
        <li>
          <Link to="/main">
            <img src="assets/images/calendar.svg" alt="Calendar" className="icon calendar-icon" />
            <span className="today">{formattedDate}</span>
          </Link>
        </li>
        <li>
          <Link to="/main">
            <img src="assets/images/clock.svg" alt="Clock" className="icon clock-icon" />
            <span className="time-now">{formattedTime}</span>
          </Link>
        </li>
      </ul>
      <ul className="profile-menu">
        <li className="profile" onClick={handleProfileClick}>
          <a href="#profile">
            <img src="assets/images/sample.jpg" alt="Profile-img" />
            <div className="profile-info">
              <div className="user-id">{user?.username || 'UserID1234'}</div>
              <div className="user-email">{user?.email || 'example@gmail.com'}</div>
            </div>
          </a>
        </li>
      </ul>
      {showLogoutPopup && <LogoutPopup onConfirm={confirmLogout} onCancel={cancelLogout} />}
    </nav>
  );
};

Navigation.propTypes = {
  onNoticeClick: PropTypes.func,
};

export default Navigation;