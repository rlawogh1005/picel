// src/pages/FriendPage.jsx
import React, { useState } from 'react';
import FriendOnlineSection from '../components/Formain/friend/FriendOnlineSection.jsx';
import FriendAllSection from '../components/Formain/friend/FriendAll.jsx';
import AddFriendSection from '../components/Formain/friend/AddFriendSection.jsx';
import FriendRequestSection from '../components/Formain/friend/FriendRequest.jsx';
import '../styles/login-style.css'; // FriendPage 스타일

const FriendPage = () => {
  const [activeSection, setActiveSection] = useState('friend-online');

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <section id="friend" className="content-section active">
      <div className="list">
        <ul>
          <li className="friend-menu" onClick={() => handleMenuClick('friend-online')}>
            <div className="list-menu">
              <div className="list-main">Online</div>
              <div className="list-sub">
                Friends currently online
                <span className="online-friend friend-count">5</span>
              </div>
            </div>
          </li>
          <li className="friend-menu" onClick={() => handleMenuClick('friend-all')}>
            <div className="list-menu">
              <div className="list-main">All</div>
              <div className="list-sub">
                View all friends
                <span className="all-friend friend-count">12</span>
              </div>
            </div>
          </li>
          <li className="friend-menu" onClick={() => handleMenuClick('add-friend')}>
            <div className="list-menu">
              <div className="list-main">Add</div>
              <div className="list-sub">
                Sent Requests
                <span className="sent-request friend-count">2</span>
              </div>
            </div>
          </li>
          <li className="friend-menu" onClick={() => handleMenuClick('friend-request')}>
            <div className="list-menu">
              <div className="list-main">Request</div>
              <div className="list-sub">
                Received Requests
                <span className="received-request friend-count">4</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button className="toggle-list">◀</button>
      {activeSection === 'friend-online' && <FriendOnlineSection />}
      {activeSection === 'friend-all' && <FriendAllSection />}
      {activeSection === 'add-friend' && <AddFriendSection />}
      {activeSection === 'friend-request' && <FriendRequestSection />}
    </section>
  );
};

export default FriendPage;
