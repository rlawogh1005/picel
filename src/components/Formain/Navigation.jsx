// src/components/Navigation.jsx
import React, { useState, useContext } from 'react';
import NoticePopup from './NoticePopup';
import LogoutPopup from './LogoutPopup';
import { AuthContext } from '../../context/AuthContext';
import '../../styles/login-style.css'; // 네비게이션 관련 스타일

const Navigation = ({ onLogoutClick }) => {
  const { user } = useContext(AuthContext);
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  const toggleNotice = () => setIsNoticeOpen(!isNoticeOpen);

  return (
    <nav className="gnb">
      <ul className="menu">
        <li>
          <a href="#">
            <img alt="Calendar" className="icon calendar-icon" src="/path/to/calendar-icon.png" />
            <span className="today">08 / 15</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img alt="Clock" className="icon clock-icon" src="/path/to/clock-icon.png" />
            <span className="time-now">2:30 PM</span>
          </a>
        </li>
        <li className="gnb-line"></li>
        <li className="click-menu">
          <a href="#friend">
            <img alt="Friend" className="icon friend-icon" src="/path/to/friend-icon.png" />
            Friend
          </a>
        </li>
        <li className="click-menu">
          <a href="#chat">
            <img alt="Chat" className="icon chat-icon" src="/path/to/chat-icon.png" />
            Chat
          </a>
        </li>
        <li className="click-menu">
          <a href="#setting">
            <img alt="Setting" className="icon setting-icon" src="/path/to/setting-icon.png" />
            Setting
          </a>
        </li>
        <li className="click-menu notice-menu" onClick={toggleNotice}>
          <a href="#">
            <img alt="Notice" className="icon notice-icon" src="/path/to/notice-icon.png" />
            Notice
          </a>
          {isNoticeOpen && <NoticePopup />}
        </li>
      </ul>
      <li className="profile" onClick={onLogoutClick}>
        <a href="#">
          <img src="/image/sample.jpg" alt="Profile-img" />
          <div className="profile-info">
            <div className="user-id">{user?.username || 'UserID1234'}</div>
            <div className="user-email">{user?.email || 'example@gmail.com'}</div>
          </div>
        </a>
      </li>
    </nav>
  );
};

export default Navigation;
