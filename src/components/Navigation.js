import React from 'react';

const Navigation = ({ date, time, onNoticeClick }) => (
  <nav className="gnb">
    <ul className="menu">
      <li><a><img alt="Calendar" className="icon calendar-icon" /><span className="today">{date}</span></a></li>
      <li><a><img alt="Clock" className="icon clock-icon" /><span className="time-now">{time}</span></a></li>
      <li className="gnb-line"></li>
      <li className="click-menu"><a href="#friend"><img alt="Friend" className="icon friend-icon" />Friend</a></li>
      <li className="click-menu"><a href="#chat"><img alt="Chat" className="icon chat-icon" />Chat</a></li>
      <li className="click-menu"><a href="#setting"><img alt="Setting" className="icon setting-icon" />Setting</a></li>
      <li className="click-menu notice-menu" onClick={onNoticeClick}><a><img alt="Notice" className="icon notice-icon" />Notice</a></li>
    </ul>
    <li className="profile"><a>
      <img src="../image/sample.jpg" alt="Profile-img" />
      <div className="profile-info">
        <div className="user-id">UserID1234</div>
        <div className="user-email">example@gmail.com</div>
      </div>
    </a></li>
  </nav>
);

export default Navigation;
